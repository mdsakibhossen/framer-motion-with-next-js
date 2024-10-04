"use client";
import { links } from "@/lib/links";
import NavLink from "./nav-lin/NavLink";
import { motion } from "framer-motion";
const navVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};
const navChildVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};
const Nav = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="flex gap-4 md:gap-6 overflow-hidden"
    >
      {links.map((el) => (
        <motion.div key={el.id} variants={navChildVariants}>
          <NavLink href={el.href}>{el.text}</NavLink>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default Nav;
