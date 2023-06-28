import React from "react";

const Project = ({
  mainColor,
  textColor,
  projectName,
  description,
  tools,
  projectImage,
  link,
  github,
}) => {
  return (
    <div className="flex flex-row">
      <div className="lg:bg-transparent bg-[#0a2427] lg:p-0 p-4">
        <h1 className="text-olive mb-[20px] text-[24px]">{projectName}</h1>

        <div className="lg:w-[400px] mr-4 z-40 mb-4 bg-[#0a2427] backdrop:blur-md lg:p-4 rounded-md font-semibold  text-white lg:h-[150px]">
          {description}
        </div>
        <div className=" w-[300px] inline-block space-x-2  mb-2 flex-row ">
          {tools.map((tool) => (
            <span className="text-olive">{tool}</span>
          ))}
        </div>
        <ul className="flex flex-row space-x-3">
          <a href={github}>
            <img src="../../github.svg" className="w-[25px] h-[25px]" alt="" />
          </a>
          <a href={link}>
            <img src="../../link.svg" className="w-[25px] h-[25px]" alt="" />
          </a>
        </ul>
      </div>
      <div className="lg:block hidden backdrop-blur-xl opacity-40 w-[600px] h-[400px]   hover:opacity-100 transition-[3000ms] hover:bg-none  z-20 ">
        <a href={link}>
          <img
            className="z-10 opacity-50 hover:opacity-100 object-cover h-full w-full transition-[3000ms]"
            src={projectImage}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
