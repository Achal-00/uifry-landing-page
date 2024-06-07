"use client";

import { motion } from "framer-motion";

export default function ImageSection() {
  const variants = {
    initial: {
      left: "20rem",
      opacity: 0,
    },
    animate: {
      left: 0,
      opacity: 1,
    },
  };

  return (
    <div className="place-self-center lg:place-self-auto relative">
      <motion.img
        src="assets/landingPage-image2.png"
        alt="Image 2"
        className="relative lg:top-[-10%]"
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      <img
        src="icons/circle2-icon.svg"
        alt="circle"
        className="absolute top-[20%] -z-50"
      />
    </div>
  );
}
