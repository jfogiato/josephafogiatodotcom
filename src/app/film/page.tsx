import BlogTemplate from "@/components/ImageBlog";

const filmImages = [
  "/images/film1.jpg",
  "/images/film2.jpg",
  "/images/film3.jpg",
  "/images/film4.jpg",
  "/images/film5.jpg",
  "/images/film6.jpg",
  "/images/film7.jpg",
  "/images/film8.jpg",
  "/images/film9.jpg",
  "/images/film10.jpg",
  "/images/film11.jpg",
  "/images/film12.jpg",
  "/images/film13.jpg",
  "/images/film14.jpg",
  "/images/film15.jpg",
  "/images/film16.jpg",
  "/images/film17.jpg",
  "/images/film18.jpg",
];

export default function FilmPage() {
  return <BlogTemplate title="Film." images={filmImages} />;
}