import BlogTemplate from "@/components/ImageBlog";

const phillyImages = Array.from({ length: 7 }, (_, i) => `/images/philly${i + 1}.jpg`);

export default function PhillyPage() {
  return <BlogTemplate title="Philly." images={phillyImages} />;
}