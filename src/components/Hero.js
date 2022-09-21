import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, My name is George Margaritis.",
      "Junior Backend-Engineer",
      "Love the MERN stack",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="rounded-full relative h-28 w-28 mx-auto object-cover"
        src="https://www.upwork.com/profile-portraits/c1EDsDDZy5pfZ2N8ycJHl3Kjy-SOcoX5DX10igy7jjoW6Lk3WfWPMWpCECDIaOQVXu"
        alt="Profile"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[15px] pb-2">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#474973 " />
        </h1>

        <div className="pt-10">
          <a href="#about">
            <button className="hero_button">About</button>
          </a>

          <a href="#projects">
            <button className="hero_button">projects</button>
          </a>

          <a href="#skills">
            <button className="hero_button">Skills</button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
