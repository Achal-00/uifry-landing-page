import Card from "./Card";

export default function Features() {
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <Card
        image="icon-1"
        heading="Budgeting Intervals"
        content="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
      />
      <Card
        image="icon-2"
        heading="Budgeting Intervals"
        content="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
      />
      <Card
        image="icon-3"
        heading="Budgeting Intervals"
        content="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
      />
    </div>
  );
}
