import BlogTemplate from "@/components/ImageBlog";

const climateStrikeImages = Array.from(
  { length: 9 },
  (_, i) => `/images/climate_strike${i + 1}.jpg`,
);

export default function ClimateStrikePage() {
  return (
    <BlogTemplate
      title="ClimateStrike."
      images={climateStrikeImages}
      href="/climate_strike"
    />
  );
}
