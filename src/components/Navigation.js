import React, { useState } from "react";

import Backdrop from "./Backdrop";
import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);
  return (
    <nav className="flex w-full p-10 h-32 justify-between items-center top-0">
      <div
        onClick={() => setIsHamburgerMenuActive(!isHamburgerMenuActive)}
        className="select-none group h-4 justify-between items-start flex flex-col"
      >
        <div className="bg-white group-hover:bg-rose-500 duration-500 h-px w-6"></div>
        <div className="bg-white group-hover:bg-rose-500 duration-500 h-px w-4"></div>
        <div className="bg-white group-hover:bg-rose-500 duration-500 h-px w-6"></div>
      </div>
      <div className="flex w-full max-w-xl p-4 justify-between items-center">
        <nav className="cursor-pointer hover:text-rose-500 duration-500">
          HOME
        </nav>
        <nav className="cursor-pointer hover:text-rose-500 duration-500">
          ABOUT
        </nav>
        <nav className="cursor-pointer hover:text-rose-500 duration-500">
          PROJECTS
        </nav>
        <nav className="cursor-pointer hover:text-rose-500 duration-500">
          SKILLS
        </nav>
      </div>
      <button className="p-2 pl-4 pr-4 hover:bg-rose-500 duration-500">Contact</button>
      <HamburgerMenu
        onBackDropClick={() => setIsHamburgerMenuActive(false)}
        show={isHamburgerMenuActive}
      />
    </nav>
  );
};

export default Navigation;
