import ImagePage from "@/components/ImagePage";

const superBowlImages = Array.from(
  { length: 25 },
  (_, i) => `/images/photography/superbowl${i + 1}.jpeg`,
);

export default function SuperBowlPage() {
  return (
    <ImagePage
      title="Super Bowl '25."
      images={superBowlImages}
      href="/go_birds"
    />
  );
}
