"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const Slide = ({ children, animObj = {} }) => {
  const { from, to } = animObj;


  const boxVarients = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      ...from,
    },
    visible: {
      opacity: 1,
      scale: 1,
      ...to,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 25,
        ease: "easeInOut",
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <motion.div
      ref={ref}
    >
      <motion.div
        variants={boxVarients}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Slide;
