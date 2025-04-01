import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { pages } from "@/data/pages";
import { calculateReadTime } from "@/utils/readTime";

interface BlogMeta {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  readTime: string;
}

export default async function BlogPage() {
  const blogDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  const blogs: BlogMeta[] = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(blogDir, file);

      // Load metadata from MDX file
      const { metadata } = await import(`@/content/blog/${slug}.mdx`);
      const rawContent = fs.readFileSync(filePath, "utf-8");

      return {
        ...metadata,
        slug,
        readTime: calculateReadTime(rawContent),
      };
    }),
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* Sticky Header + Title */}
      <div className="sticky top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md flex flex-col items-center py-4 z-10">
        <Header currentPath="/blog" pages={pages} />
        <h1 className="text-4xl font-bold mt-2">Blog.</h1>
      </div>

      {/* Blog Grid */}
      <div className="p-8 w-full max-w-7xl grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.slug}
            className="group block rounded overflow-hidden shadow-lg hover:shadow-2xl transition dark:shadow-zinc-800 dark:hover:shadow-zinc-600"
          >
            <div className="relative w-full h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold group-hover:underline">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {new Date(blog.date).toLocaleDateString()} · {blog.readTime}
              </p>
              <p className="mt-2 text-gray-800 dark:text-gray-200 text-sm">
                {blog.description.length > 150
                  ? `${blog.description.substring(0, 150)}...`
                  : blog.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
