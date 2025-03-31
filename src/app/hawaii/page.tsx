import BlogTemplate from "@/components/ImageBlog";

const hawaiiImages = Array.from(
  { length: 29 },
  (_, i) => `/images/photography/hawaii${i + 1}.jpg`,
);

export default function HawaiiPage() {
  return <BlogTemplate title="Hawaii." images={hawaiiImages} href="/hawaii" />;
}
