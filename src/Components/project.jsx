import React from "react";

const Project = ({
  projectName,
  description,
  tools,
  projectImage,
  link,
  github,
}) => {
  return (
    <div className="flex flex-row">
      <div className="lg:bg-transparent w-[300px]  lg:w-auto bg-darkGreen lg:p-0 p-4 flex flex-col">
        <h1 className="text-olive mb-[20px] text-[24px]">{projectName}</h1>

        <div className="lg:w-[400px] lg:mr-4  mb-4 bg-darkGreen  lg:p-4 rounded-md font-semibold  text-white lg:h-[150px]">
          {description}
        </div>
        <div className=" max-w-[400px] flex flex-wrap space-x-2  mb-2 ">
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
      <div className="lg:block hidden  opacity-40 w-[600px] h-[400px] hover:opacity-100 transition-[5000ms]  ">
        <a href={link}>
          <img
            className="opacity-50 hover:opacity-100 object-cover h-full w-full transition-[3000ms]"
            src={projectImage}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
