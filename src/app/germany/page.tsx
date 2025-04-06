import ImagePage from "@/components/ImagePage";

const germanyImages = Array.from(
  { length: 13 },
  (_, i) => `/images/photography/germany${i + 1}.jpg`,
);

export default function GermanyPage() {
  return <ImagePage title="Germany." images={germanyImages} href="/germany" />;
}
