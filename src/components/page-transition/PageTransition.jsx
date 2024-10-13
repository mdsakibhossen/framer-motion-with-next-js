"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Animation variants for the overlay
  const overlayVariants = {
    hidden: { scaleX: 0, transformOrigin: "left" }, // Start with scale 0 from the left
    visible: {
      scaleX: 1,
      transformOrigin: "left",
      transition: { duration: 0.8 },
    }, // Expand to full width
    exit: {
      scaleX: 0,
      transformOrigin: "right",
      transition: { duration: 0.8 },
    }, // Collapse to the right
  };

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1600); // Total duration of the animation (expand + collapse)
    return () => clearTimeout(timer);
  }, [pathname]); // Trigger the effect on route change

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <>
            {/* Overlay that covers the full screen */}
            <motion.div
              key={pathname} // Key ensures that the transition happens on route change
              className="fixed top-0 left-0 w-full min-h-screen bg-slate-900 z-[999]"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
            />
          </>
        )}
      </AnimatePresence>
      <main>{children}</main>
    </>
  );
};

export default PageTransition;
