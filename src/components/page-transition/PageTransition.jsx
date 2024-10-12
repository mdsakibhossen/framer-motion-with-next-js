// "use client";
// import { AnimatePresence, motion } from "framer-motion";
// import { usePathname } from "next/navigation";

// const PageTransition = ({ children }) => {
//     const pathname = usePathname()
//   return (
//     <>
//       <AnimatePresence>
//         <motion.div className="fixed top-0 left-0 w-full h-screen bg-slate-900 z-[999]" />
//       </AnimatePresence>
//       <main>{children}</main>
//     </>
//   );
// };

// export default PageTransition;


"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Define animation variants
  const transitionVariants = {
    initial: { opacity: 1, scaleX: 1, originX: 0, },
    animate: { opacity: 1, scaleX: 1, originX: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, scaleX: 0, originX: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Duration of the animation

    return () => clearTimeout(timeout);
  }, [pathname]); // Trigger the effect on route change

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={pathname}
            className="fixed top-0 left-0 w-full h-screen bg-slate-900 z-[999]"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitionVariants}
          />
        )}
      </AnimatePresence>
      <main>{children}</main>
    </>
  );
};

export default PageTransition;
