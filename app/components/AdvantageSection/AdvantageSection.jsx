import ContentSection from "./ContentSection/ContentSection";
import ImageSection from "./ImageSection";

export default function AdvantageSection() {
  return (
    <div className="grid lg:grid-cols-2 px-4 lg:px-20 relative">
      <ContentSection />
      <ImageSection />
      <img
        src="icons/star1-icon.svg"
        alt="star"
        className="absolute right-[1%] top-[5%] w-8 lg:w-12"
      />
    </div>
  );
}
