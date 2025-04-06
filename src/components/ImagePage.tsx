"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { pages } from "@/data/pages";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

interface ImagePageProps {
  title: string;
  images: string[];
  href: string;
}

export default function ImagePage({ title, images, href }: ImagePageProps) {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullscreenIndex(null);
      } else if (event.key === "ArrowRight") {
        setFullscreenIndex((prevIndex) =>
          prevIndex !== null ? (prevIndex + 1) % images.length : 0,
        );
      } else if (event.key === "ArrowLeft") {
        setFullscreenIndex((prevIndex) =>
          prevIndex !== null
            ? (prevIndex - 1 + images.length) % images.length
            : images.length - 1,
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [fullscreenIndex, images.length]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="group fixed top-0 left-0 w-full z-50">
        <div
          className="w-full px-6 py-4 backdrop-blur-md 
                    bg-white/70 dark:bg-black/60 
                    text-black dark:text-white 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 
                    flex flex-col items-center border-b border-black/10 dark:border-white/10"
        >
          <Header currentPath={href} pages={pages} />
          <h1 className="text-2xl font-semibold mt-2">{title}</h1>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setFullscreenIndex(index)}
            className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`${title} ${index + 1}`}
              fill
              sizes={`(min-width: 1024px) 25vw, (min-width: 640px) 33.333vw, 50vw`}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setFullscreenIndex(null)}
        >
          <button
            className="absolute left-4 text-white/60 bg-black/40 p-2 rounded-full hover:bg-black/75 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenIndex(
                (fullscreenIndex - 1 + images.length) % images.length,
              );
            }}
          >
            <MoveLeftIcon />
          </button>

          <Image
            src={images[fullscreenIndex]}
            alt="Fullscreen"
            width={800}
            height={800}
            className="object-contain max-w-full max-h-[85vh]"
          />

          <button
            className="absolute right-4 text-white/60 bg-black/40 p-2 rounded-full hover:bg-black/75 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenIndex((fullscreenIndex + 1) % images.length);
            }}
          >
            <MoveRightIcon />
          </button>
        </div>
      )}
    </div>
  );
}
