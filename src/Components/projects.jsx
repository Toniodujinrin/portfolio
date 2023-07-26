import React from "react";
import Project from "./project";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      projectImage: "../../copit.jpg",
      projectName: "Cop it",
      description:
        "This is a peer to peer trading platform were users can buy and sell used or new products.",
      textColor: "text-white",
      mainColor: "bg-[#6b5ce5]",
      tools: ["Node.js", "Express", "Next.js", "Tailwind", "Mongo-DB","AWS"],
      link: "https://copit.netlify.app/",
      github: "https://github.com/Toniodujinrin/cop-it",
    },
 
    {
      projectImage: "../../commentSection.png",
      projectName: "Comment Section",
      description:
        "My first Project! This is a fully front end project which showcases all CRUD functionalities",
      textColor: "text-white",
      mainColor: "bg-[#6b5ce5]",
      tools: ["React", "Tailwind"],
      link: "https://toniodujinrincommentsection.netlify.app/",
      github: "https://github.com/Toniodujinrin",
    },
    {
      projectImage: "../../timeline.png",
      projectName: "Timeline",
      description:
        "This is a full stack task managment application with a custom made backend. ",
      textColor: "text-white",
      mainColor: "bg-[#ff9900]",
      tools: ["Node.js", "Express", "React", "Tailwind", "Mongo-DB"],
      link: "https://timeline-ten.vercel.app/",
      github: "https://github.com/Toniodujinrin/todoBackend",
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
      github: "https://github.com/Toniodujinrin/countries-",
    },
  ];
  return (
    <div id="projects">
      <div className="w-full flex  p-8 mt-4 lg:mt-[100px] items-center mb-[20px]">
        <h1
          data-aos="fade-up"
          className=" lg:mb-[50px]  w-full flex flex-row space-x-2 items-center justify-center  text-olive text-[28px] "
        >
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
            src="../../logo.svg"
            alt=""
          />
          <p>Selected Projects</p>
          <motion.img
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}
            src="../../logo.svg"
            alt=""
          />
        </h1>
      </div>
      <div className="w-full h-full p-4 flex flex-col items-center space-y-6   ">
        {projects.map((project, index) => (
          <div id={index}>
            <div
              data-aos={"fade-up"}
              data-aos-duration="400"
              className=" w-full "
            >
              <Project
                github={project.github}
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
