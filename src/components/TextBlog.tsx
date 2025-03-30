import Image from "next/image";
import Link from "next/link";
import { BlogType } from "@/types/textBlog";
import { HomeModernIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

export default function TextBlog({ blog }: { blog: BlogType }) {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-12 text-black dark:text-white">
      
      {/* Top Navigation Buttons */}
      <div className="absolute top-4 left-4 right-4 flex justify-between">
        {/* Home Button */}
        <Link
          href="/"
          className="flex items-center gap-1 hover:text-gray-300 text-black dark:text-white transition"
        >
          <HomeModernIcon className="w-6 h-6" />
        </Link>

        {/* Back Button */}
        <Link
          href="/blog"
          className="flex items-center gap-1 hover:text-gray-300 text-black dark:text-white transition"
        >
          <ArrowUturnLeftIcon className="w-6 h-6" />
        </Link>
      </div>

      {/* Blog Title + Meta */}
      <h1 className="text-4xl font-bold mt-12 mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {blog.date}
      </p>

      {/* Blog Image */}
      {blog.image && (
        <div className="w-full h-64 relative mb-8">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="rounded-xl object-cover"
            priority
          />
        </div>
      )}

      {/* Blog Body */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {blog.body.map((section, i) => (
          <div key={i} className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">{section.subtitle}</h2>
        <div 
          dangerouslySetInnerHTML={{ __html: section.content }}
          className="prose-p:my-4"
        />
          </div>
        ))}
      </div>
    </div>
  );
}