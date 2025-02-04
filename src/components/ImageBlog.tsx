"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { pages } from "@/app/page";

interface BlogTemplateProps {
  title: string;
  images: string[];
  href: string;
}

export default function BlogTemplate({ title, images, href }: BlogTemplateProps) {
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
    <div className="flex flex-col items-center min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="sticky top-0 w-full bg-grey bg-opacity-90 backdrop-blur-md flex flex-col items-center py-4 z-10">
        <Header currentPath={href} pages={pages} />
        <h1 className="text-4xl font-bold mt-2">{title}</h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setFullscreenImage(src)}
            className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`${title} ${index + 1}`}
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