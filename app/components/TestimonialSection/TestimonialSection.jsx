import ContentSection from "./ContentSection/ContentSection";
import Header from "./Header";
import ImageSection from "./ImageSection";

export default function TestimonialSection() {
  return (
    <div className="grid lg:grid-cols-2 px-4 lg:px-20 relative pt-20 lg:pt-0">
      <Header />
      <ImageSection />
      <ContentSection />
      <img
        src="icons/star1-icon.svg"
        alt="star"
        className="absolute top-[2%] lg:top-[-10%] right-[20%] w-10"
      />
      <img
        src="icons/star-icon.svg"
        alt="star"
        className="absolute top-full lg:top-[90%] left-[5%] w-10"
      />
    </div>
  );
}
