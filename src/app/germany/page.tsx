import BlogTemplate from "@/components/ImageBlog";

const germanyImages = Array.from(
  { length: 13 },
  (_, i) => `/images/germany${i + 1}.jpg`,
);

export default function GermanyPage() {
  return (
    <BlogTemplate title="Germany." images={germanyImages} href="/germany" />
  );
}
