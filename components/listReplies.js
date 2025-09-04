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
              return [update.result]; // Start fresh with new entry
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
    <div className="p-4 mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-[1020px] mt-10 border-collapse">
        {entries.map((entry, index) => (
          <div className="fake-border-x px-2 border-collapse" key={entry._id}>
            <div className="fake-border-y flex flex-col mx-2 py-2 h-full min-h-64 text-center">
              <div className="py-2 mx-auto">
                <img src={`/imgs/flower${(index) % 3}.png`} alt="Flower decoration" />
              </div>
              <div className="text-xs">{Math.max(1, totalCount - index)}번째 메시지</div>
              <div className="text-base font-bold leading-6 pb-8 break-keep mt-4 break-words">
                {entry.text}
              </div>
              <div className="text-xs mt-auto pb-1">
                {entry.user && <>{entry.user}님</>}
              </div>
              <small className="mt-2 text-xs">
                {new Date(entry.date).toLocaleDateString()}
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
          className="mb-20 block my-4 mx-auto px-4 py-2 text-white bg-black rounded-full text-base" 
          onClick={handleLoadMore} 
          disabled={isLoading}
        >
          더 보기
        </button>
      ) : null}
    </div>
  );
}