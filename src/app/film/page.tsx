import ImagePage from "@/components/ImagePage";

const filmImages = Array.from(
  { length: 63 },
  (_, i) => `/images/photography/film${i + 1}.jpg`,
);

export default function FilmPage() {
  return <ImagePage title="Film." images={filmImages} href="/film" />;
}
