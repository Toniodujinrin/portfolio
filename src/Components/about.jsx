import React from "react";
import { motion } from "framer-motion";
import Header from "./reusables/header";

const About = () => {
  return (
    <div id="about" className="p-8">
      <Header title={"about me"} />

      <p className="text-white text-[21px]  lg:w-[50%]  w-full ">
        Hey, my name is Toni. I love programming and solving problems with
        software. I am intersted in various fields including backend development
        and networking
      </p>
    </div>
  );
};

export default About;
