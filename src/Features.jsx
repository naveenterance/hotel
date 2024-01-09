import React, { useState, useEffect } from "react";
import "./App.css";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
const Features = () => {
  const fadeIN = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [500, 0], [1, 0]);
  return (
    <div className="w-screen  ">
      {" "}
      <motion.div
        className=" text-slate-200 font-bold    h-screen  bg-slate-900"
        variants={fadeIN}
        initial="initial"
        whileInView="animate"
        exit={{ opacity: 0 }}
        style={{
          scale: scale,
        }}
      >
        <img
          src="https://qresorts.in/uploads/59991c866ece7_9R0A2324.jpg"
          className="mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default Features;
