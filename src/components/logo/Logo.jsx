"use client";
import Link from "next/link";
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <motion.div
      className="logo"
      initial={{ y: -100, opacity: 0.35 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link href={"/"} className="uppercase font-medium text-2xl">
        Logo
      </Link>
    </motion.div>
  );
};

export default Logo;
