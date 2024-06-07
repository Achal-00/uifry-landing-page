import Features from "./Features";
import Header from "./Header";

export default function ContentSection() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:self-center">
      <Header />
      <Features />
    </div>
  );
}
