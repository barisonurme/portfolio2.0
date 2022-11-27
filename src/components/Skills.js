import React from "react";

import {
  SiRedux,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobeaftereffects,
  SiUnity,
  SiBlender,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import Tooltip from "./Tooltip";

const Skills = () => {
  return (
    <div
      name="skills"
      className="flex flex-col w-full gap-8 max-w-5xl items-center p-32"
    >
      <div className="flex text-white text-4xl">
        <div className="whitespace-nowrap">These are some of</div>
        <div className="text-rose-500 whitespace-nowrap">
          &nbsp;Technologies I'm Using
        </div>
      </div>
      <div className="flex w-full justify-center gap-8 flex-wrap">
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <FaReact size={25} />
          <Tooltip text={"ReactJs"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <SiRedux size={25} />
          <Tooltip text={"Redux"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <FaReact size={25} />
          <Tooltip text={"React Native"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <DiJavascript1 size={25} />
          <Tooltip text={"Javscript"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <SiTailwindcss size={25} />
          <Tooltip text={"Tailwind"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <SiAdobephotoshop size={25} />
          <Tooltip text={"Photoshop"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <SiAdobeillustrator size={25} />
          <Tooltip text={"Illustrator"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <SiAdobeindesign size={25} />
          <Tooltip text={"InDesign"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <SiAdobeaftereffects size={25} />
          <Tooltip text={"Aftereffects"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <SiUnity size={25} />
          <Tooltip text={"Unity3d"} />
        </div>
        <div className="group relative p-4 bg-slate-800/30 duration-500  border-slate-800 border hover:bg-rose-500 w-16 h-16 rounded-md flex justify-center items-center text-xl font-bold text-white">
          <SiBlender size={25} />
          <Tooltip text={"Blender"} />
        </div>
      </div>
    </div>
  );
};

// const wave = (
//   <svg
//     className="fill-rose-500 opacity-40"
//     version="1.1"
//     id="Layer_1"
//     x="0px"
//     y="0px"
//     viewBox="0 0 230 103.6"
//   >
//     <style type="text/css"></style>
//     <g>
//       <path
//         d="M170.4,68.8c-14.3,0-21.5-8.3-28.4-16.3c-7-8.1-13.5-15.7-26.9-15.7s-20,7.6-26.9,15.7
//  c-7,8-14.1,16.3-28.4,16.3s-21.5-8.3-28.4-16.3c-7-8.1-13.5-15.7-26.9-15.7v-2c14.3,0,21.5,8.3,28.4,16.3
//  c7,8.1,13.5,15.7,26.9,15.7s20-7.6,26.9-15.7c7-8,14.1-16.3,28.4-16.3s21.5,8.3,28.4,16.3c7,8.1,13.5,15.7,26.9,15.7
//  s20-7.6,26.9-15.7c7-8,14.1-16.3,28.4-16.3v2c-13.4,0-20,7.6-26.9,15.7C191.9,60.5,184.7,68.8,170.4,68.8z"
//       />
//     </g>
//     <g>
//       <path
//         d="M170.4,44.3c-14.3,0-21.5-8.3-28.4-16.3c-7-8.1-13.5-15.7-26.9-15.7s-20,7.6-26.9,15.7
//  c-7,8-14.1,16.3-28.4,16.3C45.3,44.3,38.1,36,31.2,28c-7-8.1-13.5-15.7-26.9-15.7v-2c14.3,0,21.5,8.3,28.4,16.3
//  c7,8.1,13.5,15.7,26.9,15.7s20-7.6,26.9-15.7c7-8,14.1-16.3,28.4-16.3s21.5,8.3,28.4,16.3c7,8.1,13.5,15.7,26.9,15.7
//  s20-7.6,26.9-15.7c7-8,14.1-16.3,28.4-16.3v2c-13.4,0-20,7.6-26.9,15.7C191.9,36,184.7,44.3,170.4,44.3z"
//       />
//     </g>
//     <g>
//       <path
//         d="M170.4,93.3c-14.3,0-21.5-8.3-28.4-16.3c-7-8.1-13.5-15.7-26.9-15.7s-20,7.6-26.9,15.7
//  c-7,8-14.1,16.3-28.4,16.3S38.3,85,31.4,77c-7-8.1-13.5-15.7-26.9-15.7v-2c14.3,0,21.5,8.3,28.4,16.3c7,8.1,13.5,15.7,26.9,15.7
//  s20-7.6,26.9-15.7c7-8,14.1-16.3,28.4-16.3s21.5,8.3,28.4,16.3c7,8.1,13.5,15.7,26.9,15.7s20-7.6,26.9-15.7
//  c7-8,14.1-16.3,28.4-16.3v2c-13.4,0-20,7.6-26.9,15.7C191.9,84.9,184.7,93.3,170.4,93.3z"
//       />
//     </g>
//   </svg>
// );

export default Skills;
