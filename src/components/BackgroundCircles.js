import React from "react";
import { motion } from "framer-motion";
const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="border absolute border-[#0d0c1d] h-[200px] w-[200px] mt-52 animate-pulse rounded-full " />
      <div className="border absolute border-[#0d0c1d] h-[300px] w-[300px] mt-52 rounded-full opacity-50" />
      <div className="border absolute border-[#0d0c1d] h-[500px] w-[500px] mt-52  rounded-full opacity-50" />
      <div className="border absolute border-[#474973] h-[650px] w-[650px] mt-52 animate-ping rounded-full opacity-20" />
      <div className="border absolute border-[#0d0c1d] h-[800px] w-[800px] mt-52  rounded-full opacity-50 " />
    </motion.div>
  );
};

export default BackgroundCircles;
