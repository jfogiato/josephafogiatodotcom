import ImagePage from "@/components/ImagePage";

const phillyImages = Array.from(
  { length: 7 },
  (_, i) => `/images/photography/philly${i + 1}.jpg`,
);

export default function PhillyPage() {
  return <ImagePage title="Philly." images={phillyImages} href="/philly" />;
}
