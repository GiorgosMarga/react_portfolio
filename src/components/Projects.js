import React from "react";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto z-0 items-center"
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl ml-[20px] ">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mt-10 md:mt-24">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            className="h-64 w-64 md:h-64 md:w-96"
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://uploads-ssl.webflow.com/5fcc0b14408d2b45610a16e6/60bfadd5a5822950647cac1b_This%20Is%20Hulu%20Masthead.jpg"
            alt="Project"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration=[gray]">
                Clones 1 of 3:
              </span>{" "}
              HULU Clone{" "}
            </h4>
            <p className="text-lg text-center md:text-left">
              HULU Clone is created using React and tailwindcss. Its based on
              the HULU UI and its completely responsive for every device. It
              uses the themoviedatabase API to fetch real time data and display
              the right movies for every filter you apply. You can check it out{" "}
              <a
                href="https://hulu-2-clone-giorgosmarga.vercel.app/"
                className=" underline"
              >
                here
              </a>
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            className="h-64 w-64 md:h-64 md:w-96"
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://www.scdn.co/i/_global/open-graph-default.png"
            alt="Project"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration=[gray]">
                Clones 2 of 3:
              </span>{" "}
              Spotify Clone{" "}
            </h4>
            <p className="text-lg text-center md:text-left">
              Spotify Clone is created using Next.js and tailwindcss. Its based
              on the Spotify web UI and its completely responsive for every
              device. It uses Next-Auth so you can sign-in with your own spotify
              account and play music in real time. The data is retrieved from
              your account. You can check it out{" "}
              <a
                href="https://spotify-2-0-five.vercel.app/"
                className=" underline"
              >
                here.
              </a>{" "}
              If you want to play music, you need to have a premium account.
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            className="h-64 w-64 md:h-64 md:w-96"
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://indicator.gr/wordpress/wp-content/uploads/2021/10/Airbnb.png"
            alt="Project"
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration=[gray]">
                Clones 3 of 3:
              </span>{" "}
              Airbnb Clone{" "}
            </h4>
            <p className="text-lg text-center md:text-left">
              Airbnb Clone is created using Next.js and tailwindcss. Its based
              on the Airbnb web UI and its completely responsive for every
              device. It uses server side and static server side rendering to
              fetch data from an API end point. You can check it out{" "}
              <a
                href="https://airbnb-2-0-drab.vercel.app/"
                className=" underline"
              >
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] left-0 h-[500px] bg-[#0d0c1d]/50 -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
