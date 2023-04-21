import React from "react";
import { toast } from "react-toastify";
const NavBar = () => {
  return (
    <nav className="w-full z-30 fixed flex backdrop-blur-lg h-[70px] flex-row items-center px-6 py-2 justify-end">
      <ul className="text-lightGray cursor-pointer  flex flex-row space-x-4 font-semibold text-[18px]">
        <li>
          <img
            onClick={() => {
              navigator.clipboard.writeText("tonilobadujinrin@gmail.com");
              toast.success("Email copied to clipboard", { theme: "dark" });
            }}
            className="h-[30px] w-[30px]"
            src="../../gmail.svg"
            alt=""
          />
        </li>
        <li>
          <a href="https://www.instagram.com/toniodujinrin/">
            <img
              className="h-[30px] w-[30px]"
              src="../../instagram.svg"
              alt=""
            />
          </a>
        </li>
        <li className="">
          <a href="https://www.linkedin.com/in/toni-odujinrin-02a80b232/">
            <img
              className="h-[30px] w-[30px]"
              src="../../linkedin.svg"
              alt=""
            />
          </a>
        </li>
        <li className="">
          <a href="https://github.com/Toniodujinrin">
            <img className="h-[30px] w-[30px]" src="../../github.svg" alt="" />
          </a>
        </li>

        <li>
          <button className="h-[40px] w-[100px] text-aquamarine border  border-aquamarine">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
