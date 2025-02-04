import BlogTemplate from "@/components/ImageBlog";

const colombiaImages = Array.from({ length: 40 }, (_, i) => `/images/colombia${i + 1}.jpg`);

export default function ColombiaPage() {
  return <BlogTemplate title="Colombia." images={colombiaImages} href="/colombia" />;
}