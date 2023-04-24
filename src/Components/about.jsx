import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="p-8">
      <h1
        data-aos="fade-up"
        className=" mb-[50px] lg:w-[60%] w-full flex flex-row space-x-2 items-center  border-b border-b-aquamarine  text-olive text-[24px] "
      >
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity }}
          src="../../logo.svg"
          alt=""
        />
        <p>About Me</p>
      </h1>
      <p className="text-white lg:w-[50%] w-full ">
        Hey, my name is Toni. I love programmin and solving probles with
        software. I started programming in 2021 and I absolutely fell in love
        with it. I started out with building simple websites with HTML and CSS
        for fun, and now I can build full stack web applications.
      </p>
    </div>
  );
};

export default About;
