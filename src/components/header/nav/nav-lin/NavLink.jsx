"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const containerVariants = {
  initial: {},
  hover: {},
};
const span1Variants = {
  initial: { y: 0 },
  hover: { y: "-100%" },
};
const span2Variants = {
  initial: { y: "100%" },
  hover: { y: 0 },
};

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`uppercase font-medium text-lg hover:text-blue-500 duration-300 transition-colors relative overflow-hidden  ${
        path === href ? "text-blue-500" : ""
      }`}
    >
      <motion.span
        variants={containerVariants}
        initial="initial"
        whileHover="hover"
      >
        <motion.span variants={span1Variants} className="inline-block">
          {children}
        </motion.span>
        <motion.span
          variants={span2Variants}
          className="inline-block absolute left-0"
        >
          {children}
        </motion.span>
      </motion.span>
    </Link>
  );
};

export default NavLink;
