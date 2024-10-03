"use client";

import { motion } from "framer-motion";

const SecTwo = () => {
  const boxVariants = {
    hidden: {
      x: "-40vw", // try to keep it samll
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        dumping: 80,
      },
    },
  };
  return (
    <section className="sec-two py-20 bg-slate-900 overflow-hidden">
      <h1 className="text-4xl text-slate-300 uppercase font-medium text-center mt-5 mb-20">
        Section <span className="text-[#f43b60]">Two</span>
      </h1>
      <div className="container mx-auto px-3 w-full flex justify-center">
        <motion.div
          variants={boxVariants}
          initial="hidden"
          //   animate="visible"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          className="box w-60 h-60 bg-purple-500"
        ></motion.div>
      </div>
    </section>
  );
};

export default SecTwo;
