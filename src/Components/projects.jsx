import React from "react";
import MiniProject from "./miniProject";
import Project from "./project";
import Header from "./reusables/header";

const Projects = () => {
  const projects = [
    {
      projectImage: "../../meetup.png",
      projectName: "Meet up",
      description:
        "This is an instant messaging platform with end to end encryption texts and calls. It is available as a mobile app and web client",
      textColor: "text-white",
      mainColor: "bg-[#6b5ce5]",
      tools: [
        "TypeScript",
        "Javascript",
        "Node.js",
        "WebRTC",
        "Socket.io",
        "AWS EC2",
        "React Native",
        "Mongo-DB",
        "React",
        "Tailwind",
      ],
      link: "https://meet-up-client.vercel.app/",
      github: "https://github.com/Toniodujinrin/meetup",
    },
    {
      projectImage: "../../copit.jpg",
      projectName: "Cop it",
      description:
        "This is a peer to peer trading platform were users can buy and sell used or new products.",
      textColor: "text-white",
      mainColor: "bg-[#6b5ce5]",
      tools: ["Node.js", "Express", "Next.js", "Tailwind", "Mongo-DB", "AWS"],
      link: "https://copit.netlify.app/",
      github: "https://github.com/Toniodujinrin/cop-it",
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
  ];

  const miniProjects = [
    {
      projectName: "netmapper",
      description:
        "This is a networking tool for mapping out a network, usefull for network admins",
      textColor: "text-black",
      mainColor: "bg-[#f1f1f1]",
      tools: ["Python", "Scapy"],
      github: "https://github.com/Toniodujinrin/netmapper",
    },
    {
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
      <div className="w-full flex px-2 mt-4 lg:mt-[50px] items-center ">
        <Header title={"projects"} />
      </div>
      <div className="w-full h-full px-4 flex flex-col items-center space-y-6 mb-4   ">
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

      <div className="flex px-4 flex-col w-full items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
        {miniProjects.map((project) => (
          <MiniProject
            projectName={project.projectName}
            description={project.description}
            github={project.github}
            tools={project.tools}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
