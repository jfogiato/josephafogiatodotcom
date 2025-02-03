import BlogTemplate from "@/components/ImageBlog";

const germanyImages = [
  "/images/germany1.jpg",
  "/images/germany2.jpg",
  "/images/germany3.jpg",
  "/images/germany4.jpg",
  "/images/germany5.jpg",
  "/images/germany6.jpg",
  "/images/germany7.jpg",
  "/images/germany8.jpg",
  "/images/germany9.jpg",
  "/images/germany10.jpg",
  "/images/germany11.jpg",
  "/images/germany12.jpg",
  "/images/germany13.jpg",
  "/images/germany14.jpg",
  "/images/germany15.jpg",
];

export default function GermanyPage() {
  return <BlogTemplate title="Germany." images={germanyImages} />;
}