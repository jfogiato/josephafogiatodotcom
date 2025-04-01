import BlogTemplate from "@/components/ImageBlog";

const superBowlImages = Array.from(
  { length: 25 },
  (_, i) => `/images/photography/superbowl${i + 1}.jpeg`,
);

export default function SuperBowlPage() {
  return (
    <BlogTemplate
      title="Super Bowl '25."
      images={superBowlImages}
      href="/go_birds"
    />
  );
}
