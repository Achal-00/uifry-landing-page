import Card from "./Card";

export default function Content() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <Card
        heading="The Best Financial Accounting App Ever!"
        content="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris."
        background="bg-nav-red"
        font="text-white"
      />
      <Card
        heading="The Best Financial Accounting App Ever!"
        content="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris."
        background="bg-white"
        font="text-black"
      />
      <Card
        heading="The Best Financial Accounting App Ever!"
        content="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris."
        background="bg-nav-red lg:bg-white"
        font="text-white lg:text-black"
      />
      <Card
        heading="The Best Financial Accounting App Ever!"
        content="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris."
        background="bg-white lg:bg-nav-red"
        font="text-black lg:text-white"
      />
      <Card
        heading="The Best Financial Accounting App Ever!"
        content="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris."
        background="bg-nav-red"
        font="text-white"
      />
      <Card
        heading="The Best Financial Accounting App Ever!"
        content="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In
        ultrices malesuada elit mauris."
        background="bg-white"
        font="text-black"
      />
    </div>
  );
}
