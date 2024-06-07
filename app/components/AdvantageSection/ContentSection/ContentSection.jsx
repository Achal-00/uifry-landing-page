import Card from "./Card";
import Header from "./Header";

export default function ContentSection() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 self-center">
      <Header />
      <Card />
    </div>
  );
}
