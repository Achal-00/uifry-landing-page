import SecFive from "./SecFive";
import SecFour from "./SecFour";
import SecOne from "./SecOne";
import SecThree from "./SecThree";
import SecTwo from "./SecTwo";

export default function Footer() {
  return (
    <div className="px-4 lg:px-20 pb-12 grid gap-12 lg:gap-0 lg:grid-cols-[1fr_1fr_1fr_1fr_2fr] place-items-center lg:place-items-start">
      <SecOne />
      <SecTwo />
      <SecThree />
      <SecFour />
      <SecFive />
    </div>
  );
}
