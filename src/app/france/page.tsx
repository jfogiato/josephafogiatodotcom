import ImagePage from "@/components/ImagePage";

const franceImages = Array.from(
  { length: 32 },
  (_, i) => `/images/photography/france${i + 1}.jpg`,
);

export default function FrancePage() {
  return <ImagePage title="France." images={franceImages} href="/france" />;
}
