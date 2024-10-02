"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const buttonVariants = {
  hover: {
    scale: [1, 1.25, 1, 1.25, 1],
    boxShadow: "0px 0px 10px 1px #3B82F6",
    transition: {
      type: "tween",
      duration: .5
    }
  },
  hidden: {
    y: "200px",
    x: "-50%",
  },
  visible: {
    y: 0,
    x: "-50%",
    transition: { delay: 0.75 },
  },
};

const listContainerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const listVariants = {
  hidden: {
    scale: 0,
    originX: 0,
  },
  visible: {
    scale: 1,
    originX: 0,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Hero = () => {
  const [isViewed, setIsViewed] = useState(false);
  const products = ["Apple", "Mango", "Orange", "Jackfruits"];

  return (
    <section className="py-20 h-screen flex justify-center items-center bg-slate-800 text-white relative overflow-hidden">
      {/* Button to toggle the visibility of the product list */}
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        initial="hidden"
        animate="visible"
        onClick={() => setIsViewed((pv) => !pv)}
        className="px-10 py-2.5 rounded bg-blue-500 absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        {isViewed ? "Hide" : "View"}
      </motion.button>

      {isViewed && (
        <motion.div
          variants={listContainerVariants}
          initial="hidden"
          animate="visible"
          className="content"
        >
          <h3 className="text-lg font-medium mb-3">My Products: </h3>
          <ul className="ms-10 list-inside list-disc flex gap-3 flex-col">
            {products.map((el, i) => (
              <motion.li
                variants={listVariants}
                // whileHover="hover" // Hover effect on list item. It will override the stagger effect on hover
                whileHover={{
                  scale: 1.25,
                  originX: 0,
                }} // Hover effect applied directly instead of using a defined variant
                key={i}
                className="cursor-pointer"
              >
                {el}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
