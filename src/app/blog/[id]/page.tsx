import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import TextBlog from "@/components/TextBlog";

export default function BlogPostPage(props: { params: { id: string } }) {
  const blog = blogs.find((blog) => blog.id === props.params.id);

  if (!blog) return notFound();

  return <TextBlog blog={blog} />;
}
