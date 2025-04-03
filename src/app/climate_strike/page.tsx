import ImagePage from "@/components/ImagePage";

const climateStrikeImages = Array.from(
  { length: 9 },
  (_, i) => `/images/photography/climate_strike${i + 1}.jpg`,
);

export default function ClimateStrikePage() {
  return (
    <ImagePage
      title="ClimateStrike."
      images={climateStrikeImages}
      href="/climate_strike"
    />
  );
}
