"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const contentBoxVariants = {
    hidden: {
      y: "100%",
      //   opacity: 0,
    },
    visible: {
      y: 0,
      //   opacity: 1,
      transition: {
        delay: 0.15,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };
  const overlayVariants = {
    visible: {
      scaleX: 1,
      //   opacity: 1,
      transformOrigin: "right",
    },
    hidden: {
      scaleX: 0,
      //   opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <span ref={ref} className="overflow-hidden inline-block relative">
      <motion.span
        variants={contentBoxVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="content-box inline-block"
      >
        {children}
      </motion.span>
      <motion.span
        variants={overlayVariants}
        initial="visible"
        animate={isInView ? "hidden" : "visible"}
        className="overlay absolute left-0 top-0 w-full h-full bg-yellow-400"
      ></motion.span>
    </span>
  );
};

export default Reveal;
