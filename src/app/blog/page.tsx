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

      {/* Blog List */}
      <div className="w-full max-w-3xl px-4 py-8">
        {blogs.map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.slug}
            className="block mb-8 group"
          >
            <article className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-200">
              {/* Image */}
              <div className="relative w-full aspect-[21/9] mb-6">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  <span className="mx-2">·</span>
                  {blog.readTime}
                </p>
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
