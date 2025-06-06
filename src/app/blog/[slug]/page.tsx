import Link from "next/link";
import Image from "next/image";
import { HomeModernIcon } from "@heroicons/react/24/outline";
import { Undo2Icon } from "lucide-react";
import fs from "fs";
import path from "path";
import { calculateReadTime } from "@/utils/readTime";

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(dir);

  return files
    .filter((file: string) => file.endsWith(".mdx"))
    .map((file: string) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export const dynamicParams = false;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(
    `@/content/blog/${slug}.mdx`
  );

  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const readTime = calculateReadTime(rawContent);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-black dark:text-white">
      {/* Top nav */}
      <div className="mb-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm hover:text-gray-300 text-black dark:text-white"
        >
          <HomeModernIcon className="w-6 h-6" />
        </Link>

        <Link
          href="/blog"
          className="text-sm hover:text-gray-300 text-black dark:text-white"
        >
          <Undo2Icon className="w-6 h-6" />
        </Link>
      </div>

      {/* Title and Meta */}
      <h1 className="text-4xl font-bold mb-2">{metadata.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {new Date(metadata.date).toLocaleDateString()} · {readTime}
      </p>

      {/* Featured Image */}
      {metadata.image && (
        <div className="w-full h-72 relative mb-8">
          <Image
            src={metadata.image}
            alt={metadata.title}
            fill
            className="rounded-xl object-cover"
            priority
          />
        </div>
      )}

      {/* MDX Body */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <Post />
      </div>
    </div>
  );
}
