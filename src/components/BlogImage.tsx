"use client";
import Image from "next/image";
import { useState } from "react";

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function BlogImage({
  src,
  alt,
  caption,
  width = 800,
  height = 500,
  priority = false,
}: BlogImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      {/* Inline Image */}
      <div className="my-5 text-center">
        <div
          className="inline-block cursor-zoom-in"
          onClick={() => setIsZoomed(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded shadow-lg max-w-full mb-1 h-auto transition-transform hover:scale-105"
            priority={priority}
          />
        </div>
        {caption && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic max-w-xl mx-auto">
            {caption}
          </p>
        )}
      </div>

      {/* Zoomed Image Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <Image
            src={src}
            alt={alt}
            width={width * 1.5}
            height={height * 1.5}
            className="rounded max-h-[90vh] w-auto h-auto"
            priority
          />
        </div>
      )}
    </>
  );
}
