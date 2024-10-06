"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "../logo/Logo";
import Nav from "./nav/Nav";
import { useState } from "react";

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const headerVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      transition={{
        delay: 0.25,
        type: "tween",
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="fixed w-full bg-white z-50 top-0 left-0 py-5 shadow"
    >
      <div className="container mx-auto px-3 flex justify-between items-center">
        <Logo />
        <Nav />
      </div>
    </motion.header>
  );
};

export default Header;
