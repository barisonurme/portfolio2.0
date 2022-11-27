import ReactDOM from "react-dom";

import React, { useState } from "react";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import HamburgerMenu from "./HamburgerMenu";

const Navigation = () => {
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);
  let scroll = Scroll.animateScroll;

  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = function () {
    let top = window.pageYOffset || document.documentElement.scrollTop;
    if (top <= 50 && isScrolled) setIsScrolled(false);
    if (top > 51 && !isScrolled) setIsScrolled(true);
  };

  return (
    <>
      <nav className="flex w-full p-10 h-32 justify-between items-center top-0">
        <div
          onClick={() => setIsHamburgerMenuActive(!isHamburgerMenuActive)}
          className="select-none cursor-pointer p-4 group h-12 justify-between items-start flex flex-col"
        >
          <div className="bg-white group-hover:bg-rose-500 duration-500 h-px w-6"></div>
          <div className="bg-white group-hover:bg-rose-500 duration-500 h-px w-4"></div>
          <div className="bg-white group-hover:bg-rose-500 duration-500 h-px w-6"></div>
        </div>
        <div className="flex w-full max-w-xl p-4 justify-between items-center">
          <nav
            onClick={() => scroll.scrollToTop()}
            className="cursor-pointer hover:text-rose-500 duration-500"
          >
            HOME
          </nav>
          <Link
            to="about"
            offset={-90}
            className="cursor-pointer hover:text-rose-500 duration-500"
          >
            ABOUT
          </Link>
          <Link
            to="works"
            offset={-90}
            className="cursor-pointer hover:text-rose-500 duration-500"
          >
            PROJECTS
          </Link>
          <Link
            to="skills"
            offset={-90}
            className="cursor-pointer hover:text-rose-500 duration-500"
          >
            SKILLS
          </Link>
        </div>
        <button
          to="contact"
          offset={-90}
          className="p-2 pl-4 pr-4 hover:bg-rose-500 duration-500"
        >
          Contact
        </button>
        <HamburgerMenu
          onBackDropClick={() => setIsHamburgerMenuActive(false)}
          show={isHamburgerMenuActive}
        />
      </nav>
      {/* Bottom Left to Top Button */}
      {ReactDOM.createPortal(
        <div
          onClick={() => scroll.scrollToTop()}
          className={`bottom-2 right-2 md:bottom-10 md:right-10 rounded-full z-20 fixed flex ${
            isScrolled ? "fixed" : "hidden"
          } justify-center items-center group select-none cursor-pointer hover:opacity-100 duration-500 p-6 text-rose-500`}
        >
          <MdOutlineKeyboardArrowUp
            size={25}
            className="group-hover:-translate-y-5 duration-500"
          />
          <div className="absolute opacity-0 group-hover:opacity-100 text-xs duration-500 group-hover:translate-y-1 -rotate-90 font-bold -">
            TOP
          </div>
        </div>,
        document.getElementById("totop")
      )}
    </>
  );
};

export default Navigation;
