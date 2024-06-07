import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";

export default function CustomizableSection() {
  return (
    <div className="grid lg:grid-cols-2 px-4 lg:px-20 relative">
      <ContentSection />
      <ImageSection />
      <img
        src="icons/star-icon.svg"
        alt="star"
        className="absolute lg:left-[45%] lg:-translate-x-1/2 w-8 left-[2%] top-[35%] lg:top-0"
      />
    </div>
  );
}
