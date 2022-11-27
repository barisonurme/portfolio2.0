import React from "react";

const HamburgerMenu = (props) => {
  const { show } = props;

  return (
    <>
      {show && (
        <div
          onClick={() => {
            props.onBackDropClick();
          }}
          className="flex backdrop-blur-xl flex-col bg-slate-800/10 inset-0 justify-center items-center w-full h-screen fixed z-40 text-white"
        >
          <div className="grid gap-8 text-5xl  text-center">
            <div className="group hover:text-rose-500 duration-500 cursor-pointer flex flex-col justify-center items-center">
              About
              <div className="h-2 group-hover:w-32 opacity-0 group-hover:opacity-100 bg-rose-500 w-0 flex duration-500"></div>
            </div>
            <div className="grid gap-8 text-5xl  text-center">
              <div className="group hover:text-rose-500 duration-500 cursor-pointer flex flex-col justify-center items-center">
                Projects
                <div className="h-2 group-hover:w-44 opacity-0 group-hover:opacity-100 bg-rose-500 w-0 flex duration-500"></div>
              </div>
            </div>
            <div className="grid gap-8 text-5xl  text-center">
              <div className="group hover:text-rose-500 duration-500 cursor-pointer flex flex-col justify-center items-center">
                Skills
                <div className="h-2 group-hover:w-32 opacity-0 group-hover:opacity-100 bg-rose-500 w-0 flex duration-500"></div>
              </div>
            </div>
            <div className="grid gap-8 text-5xl  text-center">
              <div className="group hover:text-rose-500 duration-500 cursor-pointer flex flex-col justify-center items-center">
                Contact
                <div className="h-2 group-hover:w-40 opacity-0 group-hover:opacity-100 bg-rose-500 w-0 flex duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
