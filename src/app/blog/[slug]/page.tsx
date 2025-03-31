export function generateStaticParams() {
  const fs = require("fs");
  const path = require("path");

  const dir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(dir);

  return files
    .filter((file: string) => file.endsWith(".mdx"))
    .map((file: string) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const post = await import(`@/content/blog/${params.slug}.mdx`);
  const Post = post.default;
  const metadata = post.metadata;

  return (
    <div className="prose dark:prose-invert mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{metadata.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {new Date(metadata.date).toLocaleDateString()}
      </p>
      <Post />
    </div>
  );
}

export const dynamicParams = false;