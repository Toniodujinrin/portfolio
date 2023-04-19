import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const message = "Hi, im Toni. Im a full stack developer";
  return (
    <div className="w-full h-[80vh]  flex justify-center items-center  p-4">
      <motion.img
        src="../../terminal.svg"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20 }}
        className=" absolute left-[100px] lg:top-[-80px] top-[50px]  z-10 w-[100px] lg:w-[300px] h-[100px] lg:h-[300px]"
        alt=""
      />
      <motion.img
        src="../../curlyBrackets.svg"
        className="absolute right-[30px] lg:right-[100px] top-[400px] lg:top-[300px] z-10 w-[100px] lg:w-[300px] h-[100px] lg:h-[300px]"
        alt=""
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <motion.img
        src="../../htmlTags.svg"
        className=" absolute left-[10px] top-[400px] lg:top-[300px] z-10 w-[100px] lg:w-[300px] h-[100px] lg:h-[300px]"
        alt=""
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <h1 className="font-semibold z-20   text-olive text-[16px] lg:text-[48px]">
        {message.split(" ").map((word, index) => (
          <motion.span
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 5,
              delay: index / 8,
              type: "spring",
              stiffness: 200,
            }}
            className="text-word m-[0.8vmin] relative inline-block"
          >
            {word}
          </motion.span>
        ))}
      </h1>
      ;
    </div>
  );
};

export default Hero;
