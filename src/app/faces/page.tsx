import BlogTemplate from "@/components/ImageBlog";

const facesImages = Array.from({ length: 10 }, (_, i) => `/images/faces${i + 1}.jpg`);

export default function FacePage() {
  return <BlogTemplate title="Faces In Places." images={facesImages} href="/faces"/>;
}