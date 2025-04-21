"use client";

import Link from "next/link";

export default function SavannahPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-200 text-black">
      <h1 className="text-7xl font-bold mb-10">Savannah!!</h1>
      <Link
        href="/emily"
        className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Go to Emily
      </Link>
    </div>
  );
}
