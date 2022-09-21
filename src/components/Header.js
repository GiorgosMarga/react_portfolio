import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="flex items-start justify-between sticky top-0 max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ opacity: 0, x: -200, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-evenly items-center"
      >
        <SocialIcon
          url="https://www.upwork.com/freelancers/~013f897f679e7e7b37"
          bgColor="gray"
          fgColor="transparent"
          style={{ width: 25 }}
        />
        <SocialIcon
          url="https://github.com/GiorgosMarga"
          fgColor="grey"
          bgColor="transparent"
          style={{ marginLeft: 13 }}
        />
        <SocialIcon
          url="https://www.facebook.com/giorgosmargaa/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://stackoverflow.com/users/13621508/giorgos-marga"
          fgColor="transparent"
          bgColor="gray"
          style={{ width: 25, marginLeft: 13 }}
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center cursor-pointer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="grey"
            bgColor="transparent"
          />

          <p className="hidden uppercase md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
