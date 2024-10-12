"use client";

import { useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const SecThree = () => {
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

  // Store references for each box
  const boxRefs = useRef([]);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const boxes = boxRefs.current;

    // Intersection Observer to track visibility
    const observer = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Await the animation to complete for the visible box
            await animate(
              entry.target, // The specific box that is intersecting
              { opacity: [0, 1], y: [200, 0] }, // Animate properties
              { duration: 0.35, ease: "easeInOut" } // Animation options
            );

            // Stop observing the item once it has been animated
            // observer.unobserve(entry.target);
          } else {
            // Reset animation when the box is out of view
            await animate(
              entry.target,
              { opacity: 0, y: 200 },
              { duration: 0 }
            );
          }
        }
      },
      { threshold: 0.2 } // Trigger animation when 20% of the box is visible
    );

    // Observe each box
    boxes.forEach((box) => {
      if (box) observer.observe(box);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, [animate]);

  return (
    <section ref={scope} className="bg-slate-900 py-20 overflow-hidden">
      <div
        className="container mx-auto px-3 grid gap-8 justify-center items-center"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(20rem,1fr))" }}
      >
        {colors.map((color, i) => (
          <div
            key={i}
            ref={(el) => (boxRefs.current[i] = el)} // Reference each box
            className="box min-w-[320px] h-[400px] opacity-0"
            style={{
              backgroundColor: color,
              transform: "translateY(200px)", // Initial Y position
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SecThree;
