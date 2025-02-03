import BlogTemplate from "@/components/ImageBlog";

const filmImages = Array.from({ length: 63 }, (_, i) => `/images/film${i + 1}.jpg`);

export default function FilmPage() {
  return <BlogTemplate title="Film." images={filmImages} />;
}