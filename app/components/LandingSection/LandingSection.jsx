import ContentSection from "./LeftSection/ContentSection";
import ImageSection from "./ImageSection";

export default function LandingSection() {
  return (
    <div className="lg:px-20 px-4 pt-8 grid lg:grid-cols-2 gap-4 lg:gap-0">
      <ContentSection />
      <ImageSection />
    </div>
  );
}
