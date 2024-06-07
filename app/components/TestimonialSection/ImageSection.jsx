import React from "react";

export default function ImageSection() {
  return (
    <div className="place-self-center relative">
      <img src="assets/testimonialPage-image.png" alt="Testimonial Image" />
      <img
        src="icons/circle1-icon.svg"
        alt="circle"
        className="absolute top-[15%] -z-50"
      />
    </div>
  );
}
