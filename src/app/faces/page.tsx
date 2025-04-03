import ImagePage from "@/components/ImagePage";

const facesImages = Array.from(
  { length: 10 },
  (_, i) => `/images/photography/faces${i + 1}.jpg`,
);

export default function FacePage() {
  return (
    <ImagePage title="Faces In Places." images={facesImages} href="/faces" />
  );
}
