"use client";

import { motion } from "framer-motion";

const SecOne = () => {
  const boxVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };
  return (
    <section className="sec-one py-20 bg-slate-700">
      <h1 className="text-4xl text-slate-300 uppercase font-medium text-center mt-5 mb-20">
        Section <span className="text-[#f43b60]">One</span>
      </h1>
      <div className="container mx-auto px-3 w-full flex justify-center">
        <motion.div
          variants={boxVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          className="box w-60 h-60 bg-blue-400"
        ></motion.div>
      </div>
    </section>
  );
};

export default SecOne;
