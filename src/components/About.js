import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl text-center ml-[20px]">
        About
      </h3>
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-full relative h-32 w-32 mx-auto object-cover -mb-20 md:mb-0 flex-shrink-0 md:rounded-sm md:mr-10"
        src="https://www.upwork.com/profile-portraits/c1EDsDDZy5pfZ2N8ycJHl3Kjy-SOcoX5DX10igy7jjoW6Lk3WfWPMWpCECDIaOQVXu"
        alt="Profile"
      />
      <div className="space-y-8 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#0d0c1d]/40">little</span>{" "}
          about me.
        </h4>
        <p className="text-base">
          Hi, I am George. I have been coding for the past 5 years with
          different languages. I started with python, writing small scripts to
          automate my everyday tasks but I got hooked by the MERN stack that
          allowed me to create beautiful websites and servers. I am passionate
          about this field and I want to help everyone create the exact website
          they need.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
