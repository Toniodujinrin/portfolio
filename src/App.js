import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

import Projects from "./Components/projects";
import Find from "./Components/findMe";
import "aos/dist/aos.css";
import Skills from "./Components/skills";
import Aos from "aos";
import { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div
      className="App bg-black
     h-full w-screen min-h-screen"
    >
      <ToastContainer />

      <NavBar />
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Find />
    </div>
  );
}

export default App;
