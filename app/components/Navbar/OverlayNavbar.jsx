import Link from "next/link";

export default function OverlayNavbar() {
  return (
    <div className="lg:hidden hidden overlay-navbar absolute top-0 left-0 bg-black w-full h-full z-40 p-4">
      <div className="min-h-screen relative flex flex-col items-center justify-center gap-8">
        <Link href={"#"} className="text-white text-2xl">
          HOME
        </Link>
        <Link href={"#"} className="text-white text-2xl">
          About Us
        </Link>
        <Link href={"#"} className="text-white text-2xl">
          Pricing
        </Link>
        <Link href={"#"} className="text-white text-2xl">
          Features
        </Link>
        <button className="text-white text-xl border border-white w-full py-3">
          DOWNLOAD
        </button>
      </div>
    </div>
  );
}
