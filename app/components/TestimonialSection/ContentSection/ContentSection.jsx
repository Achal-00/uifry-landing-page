import Content from "./Content";
import Heading from "./Heading";
import UserProfile from "./UserProfile";
import Username from "./Username";

export default function ContentSection() {
  return (
    <div className="flex flex-col gap-4 lg:self-center">
      <Heading />
      <Content />
      <UserProfile />
      <Username />
    </div>
  );
}
