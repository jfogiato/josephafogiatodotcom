import BlogTemplate from "@/components/ImageBlog";

const mummersImages = [
  "/images/mummers1.jpg",
  "/images/mummers2.jpg",
  "/images/mummers3.jpg",
  "/images/mummers4.jpg",
  "/images/mummers5.jpg",
  "/images/mummers6.jpg",
  "/images/mummers7.jpg",
  "/images/mummers8.jpg",
  "/images/mummers9.jpg",
  "/images/mummers10.jpg",
  "/images/mummers11.jpg",
  "/images/mummers12.jpg",
  "/images/mummers13.jpg",
  "/images/mummers14.jpg",
  "/images/mummers15.jpg",
  "/images/mummers16.jpg",
  "/images/mummers17.jpg",
  "/images/mummers18.jpg",
];

export default function MummersPage() {
  return <BlogTemplate title="Mummers." images={mummersImages} />;
}