import React from "react";

const NavBar = ({ setMenu }) => {
  const resume = "../../MainResume.pdf";
  const downloadFileAtUrl = () => {
    const filename = "Toni-Odujinrin-resume";
    const aTag = document.createElement("a");
    aTag.href = resume;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <nav
      className={`w-full z-30 fixed flex backdrop-blur-3xl  h-[70px] flex-row items-center p-4 justify-between`}
    >
      <img src="../../logo.svg" className="w-[60px] h-[60px]" alt="" />
      <img
        onClick={() => setMenu(true)}
        className="w-[40px] cursor-pointer lg:hidden h-[40px]"
        src="../../hamburger.svg"
        alt=""
      />
      <ul className="text-olive cursor-pointer pr-4  space-x-6 items-center hidden lg:flex flex-row ">
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
          onClick={() => downloadFileAtUrl()}
          className="h-[40px] w-[90px] cursor-pointer  flex items-center justify-center rounded-sm border border-aquamarine "
        >
          <p className="text-aquamarine">Resume</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
