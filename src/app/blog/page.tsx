import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import Header from "@/components/Header";
import { pages } from "@/data/pages";

export default function BlogPage() {
  return (
    <div className="min-h-screen p-8 bg-white text-black dark:bg-black dark:text-white">
      <Header currentPath="/blog" pages={pages}/>
      <h1 className="text-4xl font-bold mb-10 text-center">Blog.</h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            href={`/blog/${blog.id}`}
            key={blog.id}
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
                {new Date(blog.date).toLocaleDateString()}
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
