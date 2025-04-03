import ImagePage from "@/components/ImagePage";

const hawaiiImages = Array.from(
  { length: 29 },
  (_, i) => `/images/photography/hawaii${i + 1}.jpg`,
);

export default function HawaiiPage() {
  return <ImagePage title="Hawaii." images={hawaiiImages} href="/hawaii" />;
}
