import React from "react";
import Project from "./project";

const Projects = () => {
  const projects = [
    {
      projectImage: "../../commentSection.png",
      projectName: "Comment Section",
      description:
        "My first Project! This is a fully front end project which showcases all CRUD functionalities",
      textColor: "text-white",
      mainColor: "bg-[#6b5ce5]",
      tools: ["React", "Tailwind"],
      link: "https://toniodujinrincommentsection.netlify.app/",
    },
    {
      projectImage: "../../timeline.png",
      projectName: "Timeline",
      description:
        "This is a full stack task managment application with a custom made backend. ",
      textColor: "text-white",
      mainColor: "bg-[#ff9900]",
      tools: ["Node.js", "Express", , "React", "Tailwind", "Mongo-DB"],
      link: "https://timeline-ten.vercel.app/",
    },
    {
      projectImage: "../../countries.png",
      projectName: "Countries",
      description:
        "This is a front-end project which gives information about any country in the world! ",
      textColor: "text-black",
      mainColor: "bg-[#f1f1f1]",
      tools: ["React", "CSS", "API's"],
      link: "https://toniodujinrincountriesapi.netlify.app/",
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-center mt-[100px] items-center mb-[40px]">
        <h1 className="pl-4   text-olive text-[16px] lg:text-[38px] ">
          Here are some of my projects
        </h1>
      </div>
      <div className="w-full h-full p-4 flex flex-col    space-y-4  grid-cols-2">
        {projects.map((project, index) => (
          <div
            id={index}
            className={`flex  justify-between ${
              index % 2 == 0 ? `flex-row` : `flex-row-reverse`
            } `}
          >
            <div className="w-[50%] lg:block hidden"></div>
            <div
              data-aos={"fade-up"}
              data-aos-duration="400"
              className="lg:w-[50%] w-full "
            >
              <Project
                projectImage={project.projectImage}
                mainColor={project.mainColor}
                projectName={project.projectName}
                textColor={project.textColor}
                description={project.description}
                tools={project.tools}
                link={project.link}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
