import React from "react";

const NavBar = ({ setMenu }) => {
  const downloadResume = () => {
    const aTag = document.createElement("a");
    aTag.href = "../../resume.docx";
    aTag.setAttribute("download", "Toni-odujinrin-resume");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <nav
      className={`w-full z-30 fixed flex backdrop-blur-lg h-[70px] flex-row items-center p-4 justify-between`}
    >
      <img src="../../logo.svg" className="w-[60px] h-[60px]" alt="" />
      <img
        onClick={() => setMenu(true)}
        className="w-[40px] lg:hidden h-[40px]"
        src="../../hamburger.svg"
        alt=""
      />
      <ul className="text-olive cursor-pointer  space-x-6 items-center hidden lg:flex flex-row ">
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <li
          onClick={() => downloadResume()}
          className="h-[40px] w-[90px] flex items-center justify-center rounded-sm border border-aquamarine "
        >
          <p className="text-aquamarine">Resume</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
