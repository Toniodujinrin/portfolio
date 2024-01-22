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
import Sidebar from "./Components/sidebar";

function App() {
  useEffect(() => {
    Aos.init();
  });
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`App bg-[#181818] w-screen overflow-x-hidden  scroll-smooth
     h-full  flex  ${
       menu ? "flex-row-reverse" : "flex-col items-center"
     }  min-h-screen`}
    >
      <Sidebar setMenu={setMenu} menu={menu} />

      <div className={`${menu && "z-40 blur-2xl"} w-full`}>
        <ToastContainer />

        <NavBar setMenu={setMenu} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Find />
        <div></div>
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
