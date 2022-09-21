import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl ml-[20px] ">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill imageSrc={"https://reactjs.org/logo-og.png"} />
        <Skill
          imageSrc={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png"
          }
        />
        <Skill
          imageSrc={
            "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb"
          }
        />
        <Skill
          imageSrc={
            "https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png"
          }
        />
        <Skill
          imageSrc={
            "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
          }
          directionLeft={true}
        />
        <Skill
          imageSrc={
            "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          }
          directionLeft={true}
        />
        <Skill
          imageSrc={
            "https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png"
          }
        />
        <Skill
          imageSrc={
            "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
          }
        />
        <Skill
          imageSrc={
            "https://www.freebsdnews.com/wp-content/uploads/mongodb.png"
          }
          directionLeft={true}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
