"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TextReveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const charContainerVariants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: {
        delay: delay,
        staggerChildren: 0.025,
        when: "beforeChildren",
      },
    },
  };
  const charVariants = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 20,
      },
    },
  };
  return (
    <span ref={ref} className="inline-block overflow-hidden">
      <motion.span
        variants={charContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block"
      >
        {children.split("").map((el, i) =>
          el != " " ? (
            <motion.span
              variants={charVariants}
              key={i}
              className="inline-block"
            >
              {el}
            </motion.span>
          ) : (
            " "
          )
        )}
      </motion.span>
    </span>
  );
};

export default TextReveal;
