import React from "react";

const Sidebar = ({ setMenu, menu }) => {
  const downloadFileAtUrl = () => {
    const resume = "../../MainResume.pdf";
    const filename = "Toni-Odujinrin-resume";
    const aTag = document.createElement("a");
    aTag.href = resume;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div
      className={`fixed z-50 w-[60%] ${
        menu ? "flex" : "hidden"
      } flex-col justify-center items-center bg-appGray h-screen `}
    >
      <ul className="text-olive cursor-pointer space-y-[30px] text-[18px] items-center flex flex-col ">
        <a onClick={() => setMenu(false)} href="#about">
          <li>About</li>
        </a>
        <a onClick={() => setMenu(false)} href="#skills">
          <li>Skills</li>
        </a>
        <a onClick={() => setMenu(false)} href="#contact">
          <li>Contact</li>
        </a>
        <a onClick={() => setMenu(false)} href="#projects">
          <li>Projects</li>
        </a>
        <li
          onClick={() => downloadFileAtUrl()}
          className="h-[40px] w-[90px] flex items-center justify-center rounded-sm border border-aquamarine "
        >
          <p className="text-aquamarine">Resume</p>
        </li>
      </ul>
      <div
        onClick={() => {
          setMenu(false);
        }}
        className="w-[50px] mt-[35px] h-[50px] cursor-pointer rounded-full border border-aquamarine flex items-center justify-center"
      >
        <img src="../../close.svg" className="w-[40px] h-[40px]" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
