import React from "react";

const Project = ({
  mainColor,
  textColor,
  projectName,
  description,
  tools,
  projectImage,
  link,
}) => {
  return (
    <div
      className={`w-full lg:w-[90%] lg:h-[350px] ${mainColor} lg:items-center flex flex-col-reverse lg:flex-row justify-between rounded-[15px]`}
    >
      <div className="lg:w-[50%] h-full  p-4 flex flex-col ">
        <h1 className={`font-semibold text-[18px] lg:text-[32px] ${textColor}`}>
          {projectName}
        </h1>
        <p
          className={`${textColor} text-[14px] lg:text-[18px] mt-3 font-semibold `}
        >
          {description}
        </p>
        <div className="    ">
          {tools.map((tool) => (
            <span className="bg-black inline-block my-1 mr-2 lg:text-[18px] text-[12px] text-white w-fit p-[5px] rounded-[10px] ">
              {tool}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          className="bg-mainGray flex justify-around mt-3 flex-row items-center text-white rounded-md p-2"
        >
          <p>View Live</p>
          <img className="w-[15px] h-[15px]" src="../../arrow.svg" alt="" />
        </a>
      </div>

      <div className="lg:w-[50%] lg:mr-[10px] overflow-hidden h-[200px] lg:h-[330px] bg-white rounded-[15px] ">
        <img className="h-full object-cover w-full" src={projectImage} alt="" />
      </div>
    </div>
  );
};

export default Project;
