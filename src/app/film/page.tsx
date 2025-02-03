"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

const images = [
  "/images/film1.jpg",
  "/images/film2.jpg",
  "/images/film3.jpg",
  "/images/film4.jpg",
  "/images/film5.jpg",
  "/images/film6.jpg",
  "/images/film7.jpg",
  "/images/film8.jpg",
  "/images/film9.jpg",
  "/images/film10.jpg",
  "/images/film11.jpg",
  "/images/film12.jpg",
  "/images/film13.jpg",
  "/images/film14.jpg",
  "/images/film15.jpg",
  "/images/film16.jpg",
  "/images/film17.jpg",
  "/images/film18.jpg",
];

export default function FilmPage() {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullscreenImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <Header />
      <h1 className="text-4xl font-bold mb-6">Film.</h1>

      {/* Image Grid with Fixed Square Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setFullscreenImage(src)}
            className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`Film ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setFullscreenImage(null)}
          onKeyDown={(event) => event.key === "Escape" && setFullscreenImage(null)}
        >
          <Image
            src={fullscreenImage}
            alt="Fullscreen"
            width={800}
            height={800}
            className="object-contain max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
}