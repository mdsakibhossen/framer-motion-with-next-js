"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

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

  useEffect(() => {
    const boxes = boxRefs.current;
    const tl = gsap.timeline({
      defaults: { duration: 0.35, ease: "easyInOut" },
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the visible boxes with stagger
            tl.to(entry.target, {
              opacity: 1,
              y: 0,
              stagger: 0.15, // Stagger effect
            });

            // Stop observing the item once it has been animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the box is visible
    );

    // Observe each box
    boxes.forEach((box) => {
      if (box) observer.observe(box);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-slate-900 py-20 overflow-hidden">
      <div
        className="container mx-auto px-3 grid gap-8 justify-center items-center"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(20rem,1fr))" }}
      >
        {colors.map((color, i) => (
          <div
            key={i}
            ref={(el) => (boxRefs.current[i] = el)} // Reference each box
            className="box min-w-[320px] h-[400px] opacity-0 translate-y-[200px]"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default SecThree;
