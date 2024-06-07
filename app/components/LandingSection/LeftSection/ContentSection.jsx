import Header from "./Header";
import SubContent from "./SubContent";
import CTA from "./CTA";
import SubImage from "./SubImage";

export default function ContentSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 relative lg:top-[10%]">
      <Header />
      <SubContent />
      <CTA />
      <SubImage />
      <img
        src="icons/circle1-icon.svg"
        alt="circle"
        className="absolute top-[-20%] lg:left-[20%] -z-50"
      />
      <img
        src="icons/star-icon.svg"
        alt="circle"
        className="absolute top-[-10%] lg:left-[-8%] hidden lg:block"
      />
    </div>
  );
}
