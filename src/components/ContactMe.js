import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
const ContactMe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:giorgosmarga509@gmail.com?subject=${data.subject}&body=${data.message}${data.email}`;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl ml-[20px] ">
        contact
      </h3>

      <div className="flex flex-col space-y-5 mt-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[gray]/50 underline">Let's talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#0d0c1d]" />
            <p className="text-2xl">+306978067873</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#0d0c1d]" />
            <p className="text-2xl">Volos, Greece</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#0d0c1d]" />
            <p className="text-2xl">mrg.giorgos@gmail.com</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto pt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-x-2 flex">
            <input
              {...register("name")}
              placeholder="Name"
              className="contact_input"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contact_input"
              type="email"
            />
          </div>
          <input
            placeholder="Subject"
            className="contact_input"
            {...register("subject")}
          />
          <textarea
            className="contact_input"
            placeholder="Message"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-[#0d0c1d] py-5 px-10 rounded-md text-gray-300 font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
