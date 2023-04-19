import React from "react";
const NavBar = () => {
  return (
    <nav className="w-full flex flex-row items-end px-6 py-2 justify-end">
      <ul className="text-lightGray cursor-pointer  flex flex-row space-x-4 font-semibold text-[18px]">
        <li>
          <img className="h-[30px] w-[30px]" src="../../gmail.svg" alt="" />
        </li>
        <li>
          <img className="h-[30px] w-[30px]" src="../../instagram.svg" alt="" />
        </li>
        <li className="">
          <img className="h-[30px] w-[30px]" src="../../linkedin.svg" alt="" />
        </li>
        <li className="">
          <img className="h-[30px] w-[30px]" src="../../github.svg" alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
