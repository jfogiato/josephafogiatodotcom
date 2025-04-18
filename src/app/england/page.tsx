import ImagePage from "@/components/ImagePage";

const englandImages = Array.from(
  { length: 15 },
  (_, i) => `/images/photography/england${i + 1}.jpg`,
);

export default function EnglandPage() {
  return <ImagePage title="England." images={englandImages} href="/england" />;
}
