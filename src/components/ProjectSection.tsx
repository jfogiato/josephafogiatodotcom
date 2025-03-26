"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  ChevronDownIcon,
  GlobeAltIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

interface ProjectSectionProps {
  title: string;
  description: string;
  images: string[];
  githubUrl: string;
  liveUrl: string;
  bgColor?: string;
}

export default function ProjectSection({
  title,
  description,
  images,
  githubUrl,
  liveUrl,
  bgColor = "#1E40AF",
}: ProjectSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-lg p-4 shadow-md"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-between items-center">
        {/* Wrap the clickable area in a button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="h-5 flex-1 flex items-center text-left text-lg font-semibold hover:text-gray-300 p-2"
        >
          {title}
          <ChevronDownIcon
            className={`w-6 h-6 ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Keep icons separate and non-clickable for opening the section */}
        <div className="flex gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <CodeBracketIcon className="w-5 h-5" />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <GlobeAltIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="mt-2 space-y-2">
          <p className="">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((src, index) => (
              <ProjectCard key={index} src={src} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
