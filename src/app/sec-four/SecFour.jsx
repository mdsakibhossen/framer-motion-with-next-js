"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SecFour = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "tomato",
    "cyan",
    "black",
    "#ddd",
    "yellow",
    "white",
  ];
  const speed = 6;
  const boxWidth = 330;
  const gap = 25;
  const containerWidth = colors.length * (boxWidth + gap);
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: secRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <section
      ref={secRef}
      className={`bg-slate-700 py-20`}
      style={{ height: `${speed * 100}vh` }}
    >
      <div className="overflow-hidden h-screen  sticky top-0 px-3 flex items-center">
        <motion.div className="flex" style={{ x, width: containerWidth, gap }}>
          {colors.map((color, i) => (
            <div
              key={i}
              className="box h-[400px]"
              style={{ backgroundColor: color, minWidth: boxWidth }}
            ></div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecFour;
