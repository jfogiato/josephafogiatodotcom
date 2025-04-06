import ImagePage from "@/components/ImagePage";

const mummersImages = Array.from(
  { length: 18 },
  (_, i) => `/images/photography/mummers${i + 1}.jpg`,
);

export default function MummersPage() {
  return <ImagePage title="Mummers." images={mummersImages} href="/mummers" />;
}
