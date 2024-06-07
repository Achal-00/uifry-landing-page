import ContentSection from "./ContentSection/ContentSection";
import ImageSection from "./ImageSection";

export default function FeatureSection() {
  return (
    <div className="pt-24 lg:pt-12 grid lg:grid-cols-2 px-4 lg:px-20 relative">
      <ContentSection />
      <ImageSection />
      <img
        src="icons/circle1-icon.svg"
        alt="circle"
        className="absolute top-[15%] right-[-15%] -z-50"
      />
      <img
        src="icons/star-icon.svg"
        alt="star"
        className="hidden lg:block absolute top-[15%] left-[5%] w-10"
      />
    </div>
  );
}
