import BlogTemplate from "@/components/ImageBlog";

const franceImages = Array.from(
  { length: 32 },
  (_, i) => `/images/photography/france${i + 1}.jpg`,
);

export default function FrancePage() {
  return <BlogTemplate title="France." images={franceImages} href="/france" />;
}
