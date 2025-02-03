import BlogTemplate from "@/components/ImageBlog";

const englandImages = [
  "/images/england1.jpg",
  "/images/england2.jpg",
  "/images/england3.jpg",
  "/images/england4.jpg",
  "/images/england5.jpg",
  "/images/england6.jpg",
  "/images/england7.jpg",
  "/images/england8.jpg",
  "/images/england9.jpg",
  "/images/england10.jpg",
  "/images/england11.jpg",
  "/images/england12.jpg",
  "/images/england13.jpg",
  "/images/england14.jpg",
  "/images/england15.jpg",
];

export default function EnglandPage() {
  return <BlogTemplate title="England." images={englandImages} />;
}