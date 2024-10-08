"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const SecFive = () => {
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
  const [containerWidth, setContainerWidth] = useState(0);
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: secRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  //   Without window resize
  useEffect(() => {
    if (secRef.current) {
      const secWidth = secRef.current.offsetWidth;
      const width = colors.length * (boxWidth + gap) - secWidth;
      setContainerWidth(width);
    }
  }, [colors.length, boxWidth, gap]);

  // With window resize
  //   useEffect(() => {
  //     const handleResize = () => {
  //       // Update container width dynamically on mount and window resize
  //       const width = colors.length * (boxWidth + gap) - window.innerWidth +20;
  //       setContainerWidth(width);
  //     };

  //     handleResize(); // Set initial container width on mount
  //     window.addEventListener("resize", handleResize); // Update width on window resize

  //     return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  //   }, [colors.length, boxWidth, gap]);

  return (
    <section
      ref={secRef}
      className={`bg-slate-800 py-20`}
      style={{ height: `${speed * 100}vh` }}
    >
      <div className="overflow-hidden h-screen sticky top-0 px-3 flex items-center">
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

export default SecFive;
