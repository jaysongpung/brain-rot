"use client"

import React, { useState } from 'react';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'b21iwlsp',
  dataset: 'production',
  useCdn: false, // Set to `true` for production
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default function GuestbookForm() {
  const [text, setText] = useState('');
  const [nick, setNick] = useState('');
  const [waitResponse, setWaitResponse] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWaitResponse(true)
    try {
      await client.create({
        _type: 'replies',
        text,
        user: nick,
        date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
      });
      setText('');
      setNick('');
      alert('댓글 등록 완료');
      setWaitResponse(false)
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('Error submitting message. Please try again.');
      setWaitResponse(false)
    }
  };

  return (
    <div className="w-full p-4 md:w-[680px] mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          required
          value={nick}
          onChange={(e) => setNick(e.target.value)}
          className="mb-1 p-4 
          placeholder-zinc-500 
          rounded-lg w-full m-0 text-base negative-shadow bg-[#e3cebc]"
          placeholder="성함 또는 닉네임 + 자동 배포"/>
        <textarea
          className="min-h-36 p-4 
          placeholder-zinc-500 
          rounded-lg w-full m-0 text-base negative-shadow bg-[#e3cebc]"
          value={text}
          maxLength={100}
          onChange={(e) => setText(e.target.value)}
          placeholder="메시지를 남겨주세요 (최대 100자)"
          required
        />
        <button disalbed={waitResponse ? 'disabled' : 'false'} className={`text-base block w-full bg-[#D5C9BB]/60 backdrop-blur-md text-black p-4 rounded-lg
          ${waitResponse ? 'pointer-events-none' : ''}
        `} 
          type="submit">{waitResponse ? '등록중..' : '메시지 보내기'}</button>
      </form>
    </div>
  );
}