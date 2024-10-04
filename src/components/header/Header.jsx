"use client";
import { motion } from "framer-motion";
import Logo from "../logo/Logo";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25, type: "tween", duration: 0.25 }}
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
