import React from "react";

const MiniProject = ({ description, projectName, tools, github, link }) => {
  return (
    <div className="w-[300px] bg-darkGreen flex flex-col  ">
      <div className=" bg-darkGreen  p-4">
        <h1 className="text-olive mb-[20px] text-[24px]">{projectName}</h1>

        <div className=" mb-4 bg-darkGreen rounded-md font-semibold  text-white ">
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
          {link && (
            <a href={link}>
              <img src="../../link.svg" className="w-[25px] h-[25px]" alt="" />
            </a>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MiniProject;
