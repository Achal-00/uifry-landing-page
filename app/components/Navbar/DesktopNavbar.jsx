import Link from "next/link";

export default function DesktopNavbar() {
  return (
    <div className="hidden lg:flex py-4 items-center justify-between">
      <div className="flex gap-24 items-center">
        <img
          src="complete-logo.svg"
          alt="logo"
          className="w-33 logo-icon block"
        />
        <div className="flex gap-12">
          <Link
            href={"#"}
            className="text-black text-lg font-medium hover:text-nav-red transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href={"#"}
            className="text-black text-lg font-medium hover:text-nav-red transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            href={"#"}
            className="text-black text-lg font-medium hover:text-nav-red transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            href={"#"}
            className="text-black text-lg font-medium hover:text-nav-red transition-colors duration-300"
          >
            Features
          </Link>
        </div>
      </div>
      <button className="bg-black text-white px-8 py-3 rounded-md border border-black transition-colors duration-300 hover:bg-transparent hover:text-black">
        Download
      </button>
    </div>
  );
}
