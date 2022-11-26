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
            <div className="hover:text-rose-500 cursor-pointer">About</div>
            <div className="hover:text-rose-500 cursor-pointer">Works</div>
            <div className="hover:text-rose-500 cursor-pointer">Skills</div>
            <div className="hover:text-rose-500 cursor-pointer">Contact</div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
