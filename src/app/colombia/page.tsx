import ImagePage from "@/components/ImagePage";

const colombiaImages = Array.from(
  { length: 40 },
  (_, i) => `/images/photography/colombia${i + 1}.jpg`,
);

export default function ColombiaPage() {
  return (
    <ImagePage title="Colombia." images={colombiaImages} href="/colombia" />
  );
}
