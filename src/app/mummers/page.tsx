import BlogTemplate from "@/components/ImageBlog";

const mummersImages = Array.from(
  { length: 18 },
  (_, i) => `/images/photography/mummers${i + 1}.jpg`,
);

export default function MummersPage() {
  return (
    <BlogTemplate title="Mummers." images={mummersImages} href="/mummers" />
  );
}
