import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

import Projects from "./Components/projects";
import Find from "./Components/findMe";
import "aos/dist/aos.css";
import Skills from "./Components/skills";
import Aos from "aos";
import { useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import About from "./Components/about";
import { ToastContainer } from "react-toastify";

function App() {
  const downloadFileAtUrl=()=>{
    const resume = '../../MainResume.pdf'
    const filename = 'Toni-Odujinrin-resume'
     const aTag = document.createElement('a')
     aTag.href= resume
     aTag.setAttribute('download',filename)
     document.body.appendChild(aTag)
     aTag.click()
     aTag.remove()
  }
  useEffect(() => {
    Aos.init();
  });
  const [menu, setMenu] = useState(false);
 

  return (
    <div
      className={`App bg-[#181818]  scroll-smooth
     h-full  flex  ${
       menu ? "flex-row-reverse" : "flex-col items-center"
     } w-screen overflow-x-hidden min-h-screen`}
    >
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
          <li onClick={()=>downloadFileAtUrl()} className="h-[40px] w-[90px] flex items-center justify-center rounded-sm border border-aquamarine ">
            <p className="text-aquamarine">Resume</p>
          </li>
        </ul>
        <div
          onClick={() => {
            setMenu(false);
          }}
          className="w-[50px] mt-[35px] h-[50px] rounded-full border border-aquamarine flex items-center justify-center"
        >
          <img src="../../close.svg" className="w-[40px] h-[40px]" alt="" />
        </div>
      </div>
      <div className={`${menu && "z-40 blur-2xl"}`}>
        <ToastContainer />

        <NavBar setMenu={setMenu} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Find />
        <div>
          
        </div>
        <div className="w-full flex lg:flex-row justify-between p-4">
          <div className="lg:block hidden w-1/3"></div>
          <div className="text-olive w-1/2 lg:w-1/3 flex items-center justify-center">
            <p> Designed and built by Toni Odujinrin. 2023 </p>
          </div>
          <ul className="flex lg:w-1/3 w-1/2 justify-end flex-row pr-4 space-x-4">
            <a href="https://www.linkedin.com/in/toni-odujinrin-02a80b232/">
            <img
              src="../../linkedin.svg"
              className={"w-[30px] h-[30px]"}
              alt=""
            />
            </a>
            <a href="https://github.com/Toniodujinrin">
            <img
              src="../../github.svg "
              className={"w-[30px] h-[30px]"}
              alt=""
            />
            </a>
            <a href="/">
            <img
              src="../../instagram.svg"
              className={"w-[30px] h-[30px]"}
              alt=""
            />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
