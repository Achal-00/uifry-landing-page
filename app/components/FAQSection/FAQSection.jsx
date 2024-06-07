import Content from "./Content";
import Header from "./Header";

export default function FAQSection() {
  return (
    <div className="flex flex-col px-4 lg:px-20 relative pt-20 gap-8 lg:gap-12">
      <Header />
      <Content />
      <img
        src="icons/star1-icon.svg"
        alt="star"
        className="absolute top-[15%] left-[55%] w-12 hidden lg:block"
      />
    </div>
  );
}
