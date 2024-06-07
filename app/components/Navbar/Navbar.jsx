"use client";

import { useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document
        .querySelector(".menu-icon")
        .setAttribute("src", "icons/close-icon.svg");
      document
        .querySelector(".overlay-navbar")
        .classList.replace("hidden", "block");
      document.querySelector(".logo-icon").classList.replace("block", "hidden");
    } else {
      document
        .querySelector(".menu-icon")
        .setAttribute("src", "icons/hamburger-icon.svg");
      document
        .querySelector(".overlay-navbar")
        .classList.replace("block", "hidden");
      document.querySelector(".logo-icon").classList.replace("hidden", "block");
    }
  }, [menu]);

  return (
    <div className="sticky top-0 left-0 z-50 navbar lg:px-20 px-4">
      <MobileNavbar setMenu={setMenu} />
      <DesktopNavbar />
    </div>
  );
}
