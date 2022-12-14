import SlidingText from "./components/SlidingText";

import Fade from "react-reveal/Fade";
import Navigation from "./components/Navigation";
import Works from "./components/Works";

import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-scroll";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="relative w-full bg-gray-900 text-white justify-start items-center flex flex-col  font-Kanit">
        <div className="bg-[url(/src/images/filmGrain.png)] w-full h-screen fixed opacity-50 pointer-events-none z-50" />

        <Navigation />

        <div className="flex w-full justify-center h-[calc(100vh-100px)] items-center">
          <div className="flex justify-center h-[calc(100vh+1000px)] items-center absolute overflow-hidden w-full top-0 pointer-events-none">
            <div className="fixed w-full h-[calc(100vh+00px)] css-blurry-gradient animate-slowSpin pointer-events-none top-0" />
          </div>
          <div className="-translate-y-36 flex flex-col top-0 justify-center items-center text-sm md:text-2xl w-full overflow-hidden">
            <div className="flex text-center font-light tracking-wider p-4">
              Hello, I'm Barış. <br />
              Developer & Designer based on Antalya.{" "}
              <br className="flex md:hidden" />I love
            </div>
            <SlidingText
              time={3000}
              texts={[
                { text: "Web App" },
                { text: "Mobile App" },
                { text: "Game Dev" },
                { text: "Design" },
                { text: "Animation" },
              ]}
            />
          </div>
        </div>
        <Works />
      </div>
      <div className="absolute flex w-full justify-center items-center bottom-36">
        <Link
          spy={true}
          smooth={true}
          offset={-90}
          to="works"
          className="group"
        >
          <div className="group-hover:bg-rose-500 h-16 w-16 group-hover:scale-100 scale-75 rounded-full flex justify-center items-center cursor-pointer group-hover:text-slate-900 text-rose-500 duration-500">
            <RiArrowDropDownLine size={35} className="animate-bounce" />
          </div>
        </Link>
      </div>
      <Fade delay={300} duration={3000}>
        <div className="w-full flex justify-center items-center">
          <Skills />
        </div>
      </Fade>
      <Fade delay={300} duration={3000}>
        <Contact />
      </Fade>
    </>
  );
}

export default App;
