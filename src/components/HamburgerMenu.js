import React from "react";
import { Link } from "react-scroll";

const HamburgerMenu = (props) => {
  const { show } = props;

  return (
    <>
      {show && (
        <div className="flex backdrop-blur-xl flex-col bg-slate-800/10 inset-0 justify-center items-center w-full h-screen fixed z-30 text-white">
          <div className="grid gap-8 text-5xl  text-center">
            <Link
              smooth={true}
              offset={-90}
              to="about"
              onClick={() => {
                props.onBackDropClick();
              }}
            >
              <div className="group hover:text-rose-500 duration-500 cursor-pointer flex flex-col justify-center items-center">
                About
                <div className="h-2 group-hover:w-32 opacity-0 group-hover:opacity-100 bg-rose-500 w-0 flex duration-500"></div>
              </div>
            </Link>
            <Link
              smooth={true}
              offset={-90}
              to="works"
              onClick={() => {
                props.onBackDropClick();
              }}
            >
              <div className="grid gap-8 text-5xl  text-center">
                <div className="group hover:text-rose-500 duration-500 cursor-pointer flex flex-col justify-center items-center">
                  Projects
                  <div className="h-2 group-hover:w-44 opacity-0 group-hover:opacity-100 bg-rose-500 w-0 flex duration-500"></div>
                </div>
              </div>
            </Link>
            <Link
              smooth={true}
              offset={-90}
              to="skills"
              onClick={() => {
                props.onBackDropClick();
              }}
            >
              <div className="grid gap-8 text-5xl  text-center">
                <div className="group hover:text-rose-500 duration-500 cursor-pointer flex flex-col justify-center items-center">
                  Skills
                  <div className="h-2 group-hover:w-32 opacity-0 group-hover:opacity-100 bg-rose-500 w-0 flex duration-500"></div>
                </div>
              </div>
            </Link>
            <Link
              smooth={true}
              offset={-90}
              to="contact"
              onClick={() => {
                props.onBackDropClick();
              }}
            >
              <div className="grid gap-8 text-5xl  text-center">
                <div className="group hover:text-rose-500 duration-500 cursor-pointer flex flex-col justify-center items-center">
                  Contact
                  <div className="h-2 group-hover:w-40 opacity-0 group-hover:opacity-100 bg-rose-500 w-0 flex duration-500"></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
