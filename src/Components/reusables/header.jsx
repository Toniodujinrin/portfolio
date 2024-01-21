import React from "react";

const Header = ({ title }) => {
  return (
    <h1
      data-aos="fade-up"
      className=" mb-[50px]  w-full flex flex-row space-x-2    text-white text-[36px] "
    >
      <span className=" text-aquamarine">/</span>
      <span className="">{title}</span>
    </h1>
  );
};

export default Header;
