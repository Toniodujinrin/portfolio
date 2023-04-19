import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pl-4 lg:flex flex-row-reverse justify-between mt-[50px]">
      <div className="w-[50%] ">
        <motion.img
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{
            rotate: [
              0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 40, 35, 30, 25, 20, 15, 10,
              5, 0,
            ],
          }}
          src="../../handwave.png"
          alt=""
        />
      </div>
      <div className="lg:w-[50%]">
        <h1 className=" text-olive text-[18px] lg:text-[38px]">About Me</h1>
        <p className="text-white">
          Im a full stack developer, with experience in many modern tech stacks.
        </p>
      </div>
    </div>
  );
};

export default About;
