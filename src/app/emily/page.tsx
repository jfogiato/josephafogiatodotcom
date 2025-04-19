'use client';

import Link from 'next/link';

export default function EmilyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 text-black">
      <h1 className="text-8xl font-bold mb-10">Emily!!</h1>
      <Link
        href="/savannah"
        className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Go to Savannah
      </Link>
    </div>
  );
}