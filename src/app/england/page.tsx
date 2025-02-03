import BlogTemplate from "@/components/ImageBlog";

const englandImages = Array.from({ length: 15 }, (_, i) => `/images/england${i + 1}.jpg`);

export default function EnglandPage() {
  return <BlogTemplate title="England." images={englandImages} />;
}