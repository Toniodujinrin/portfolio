import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="p-8">
      <h1
        data-aos="fade-up"
        className=" mb-[50px]  w-full flex flex-row space-x-2 items-center  justify-center   text-olive text-[28px] "
      >
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
          src="../../logo.svg"
          alt=""
        />
        <p className="m-auto">About Me</p>
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
          src="../../logo.svg"
          alt=""
        />
      </h1>
      <p className="text-white text-center lg:w-[50%] m-auto w-full ">
        Hey, my name is Toni. I love programming and solving problems with
        software. I started programming in 2020 and I absolutely fell in love
        with it. I started out with building simple websites with HTML and CSS
        for fun, and now I build full stack applications.
      </p>
    </div>
  );
};

export default About;
