"use client";

import { motion } from "framer-motion";

export default function ImageSection() {
  const variants = {
    initial: {
      left: "-20rem",
      opacity: 0,
    },
    animate: {
      left: 0,
      opacity: 1,
    },
  };

  return (
    <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 place-self-center relative">
      <motion.img
        src="assets/featurePage-image.png"
        alt="Feature Image"
        className="lg:w-[90%] relative"
        variants={variants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      <img
        src="icons/circle3-icon.svg"
        alt="circle"
        className="absolute top-0 left-[-10%] -z-50"
      />
    </div>
  );
}
