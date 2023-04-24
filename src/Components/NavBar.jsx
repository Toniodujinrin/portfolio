import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
const NavBar = ({ setMenu }) => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    console.log(window.scrollY);
  }, [window.scrollY]);

  return (
    <nav
      className={`w-full z-30 fixed flex ${"backdrop-blur-lg"} ${
        isOpen ? "h-[120px]" : "h-[70px]"
      }l flex-row items-center px-6 py-2 justify-between`}
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
        <li className="h-[40px] w-[90px] flex items-center justify-center rounded-sm border border-aquamarine ">
          <p className="text-aquamarine">Resume</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
