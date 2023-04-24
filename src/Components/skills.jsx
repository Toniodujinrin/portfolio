import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      skill: "React",
      rating: 80,
      image: "../../logo192.png",
    },
    {
      skill: "Node",
      rating: 90,
      image: "../../node.svg",
    },
    {
      skill: "Mongo DB",
      rating: 60,
      image: "../../mongodb.svg",
    },
    {
      skill: "Next.JS",
      rating: 60,
      image: "../../next.svg",
    },
    {
      skill: "JavaScript",
      rating: 90,
      image: "../../javascript.svg",
    },
    {
      skill: "Python",
      rating: 70,
      image: "../../python.svg",
    },
    {
      skill: "Tailwind",
      rating: 70,
      image: "../../tailwind.svg",
    },
    {
      skill: "TypeScript",
      rating: 70,
      image: "../../typescript.svg",
    },
  ];
  return (
    <motion.div
      id="skills"
      className="lg:mb-[50px] mb-4 lg:p-8 p-8 lg:mt-[100px] mt-[60px] "
    >
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
        <p>Skills In My Locker</p>
      </h1>
      <div
        data-aos="fade-up"
        className="grid gap-4 grid-cols-2 mb-[50px] lg:grid-cols-3 justify-items-center"
      >
        {skills.map((skill) => (
          <div className="flex lg:w-[300px] lg:space-x-3 flex-col lg:flex-row p-4">
            <div>
              <img className="h-[30px] w-[30px]" src={skill.image} alt="" />
            </div>
            <div>
              <h1 className="font-semibold mb-2 text-[12px] lg:text-[18px] text-white">
                {skill.skill}
              </h1>
              <div className="lg:block hidden">
                <ProgressBar
                  customLabel=""
                  height="5px"
                  bgColor="#3cc3bc"
                  isLabelVisible={false}
                  completed={skill.rating}
                  width={"200px"}
                  baseBgColor={"#000000"}
                  animateOnRender={true}
                />
              </div>
              <div className="lg:hidden">
                <ProgressBar
                  customLabel=""
                  height="5px"
                  bgColor="#3cc3bc"
                  isLabelVisible={false}
                  completed={skill.rating}
                  width={"100px"}
                  baseBgColor={"#000000"}
                  animateOnRender={true}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
