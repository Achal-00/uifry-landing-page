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
    <div className="place-self-center relative">
      <motion.img
        src="assets/advantagePage-image.png"
        alt="Advantage Image"
        className="relative"
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      <img
        src="icons/circle1-icon.svg"
        alt="circle"
        className="absolute top-[25%] left-0 -z-50"
      />
    </div>
  );
}
