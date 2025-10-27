'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@sanity/client';
// import { LoadingProvider, useLoading } from './loadingContext';

const client = createClient({
    projectId: 'b21iwlsp',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
});

const ITEMS_PER_PAGE = 12;

export default function RepliesList() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const fetchTotalCount = async () => {
    try {
      const countQuery = `count(*[_type == "replies"])`;
      const count = await client.fetch(countQuery);
      setTotalCount(count);
    } catch (error) {
      console.error('Error fetching total count:', error);
    }
  };

  const fetchEntries = async () => {
    try {
      // Using pagination with offset instead of cursor-based pagination
      const query = `*[_type == "replies"] | order(date desc) [${page * ITEMS_PER_PAGE}...${(page + 1) * ITEMS_PER_PAGE}] {
        _id,
        user,
        text,
        date
      }`;

      const result = await client.fetch(query);
      
      if (result.length > 0) {
        setHasMore(result.length === ITEMS_PER_PAGE);
        
        setEntries((prevEntries) => {
          const newEntries = result.filter(
            (entry) => !prevEntries.some((prevEntry) => prevEntry._id === entry._id)
          );
          return [...prevEntries, ...newEntries];
        });
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching replies entries:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTotalCount();
    fetchEntries();

    // Set up real-time listener for new entries
    const subscription = client
      .listen('*[_type == "replies"]')
      .subscribe((update) => {
        if (update.result) {
          // Reset pagination when new entries come in
          setEntries((prevEntries) => {
            const exists = prevEntries.some((entry) => entry._id === update.result._id);
            if (!exists) {
              setPage(0); // Reset to first page
              setTimeout(fetchTotalCount, 200);
              return [update.result, ...prevEntries]; // Add new entry at the top
            }
            return prevEntries;
          });
        }
      });

    return () => subscription.unsubscribe();
  }, [page]); // Add page to dependencies

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 mx-auto mt-10 border-collapse border-b-1 border-zinc-700">
        {entries.map((entry, index) => (
          <div className="border-collapse border-t-1 border-zinc-700 py-3 flex flex-col w-full" key={entry._id}>
            <div className="w-full items-center h-full text-left">
              {/* <div className="text-xs">{Math.max(1, totalCount - index)}번째 메시지</div> */}
              <div className="text-base mb-2 font-bold">
                {entry.user && <>{entry.user}</>}
              </div>
              <div className="text-base leading-6 break-keep break-words">
                {entry.text}
              </div>
              <small className="text-xs text-zinc-700">
                {new Date(entry.date).toLocaleDateString()} {new Date(entry.date).toLocaleTimeString()}
              </small>
            </div>
          </div>
        ))}
      </div>
      {isLoading ? (
        <p className="mb-20 block my-4 mx-auto px-4 py-2 rounded-full text-base">
          Loading...
        </p>
      ) : hasMore ? (
        <button 
          className="block my-4 ml-auto px-4 py-2 underline text-white bg-black rounded-full text-sm" 
          onClick={handleLoadMore} 
          disabled={isLoading}
        >
          더 보기
        </button>
      ) : null}
    </div>
  );
}