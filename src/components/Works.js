import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Work from "./Work";

import autoAnimate from "@formkit/auto-animate";

const Works = () => {
  const [workModalActive, setWorkModalActive] = useState(false);
  const [selectedWork, setSelectedWork] = useState([]);
  const [filteredWorkList, setFilteredWorkList] = useState(workList);

  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const filterWorkHandler = (clickedFilter) => {
    setFilteredWorkList(workList);
    console.log(clickedFilter);
    for (const filter in filters) {
      filters[filter].status = false;

      if (filters[filter].filter === clickedFilter)
        filters[filter].status = true;
    }

    if (clickedFilter === "all") {
      return;
    }

    setFilteredWorkList(
      workList.filter((work) => work.category === clickedFilter)
    );
  };

  return (
    <div
      name="works"
      className="w-full flex justify-center items-center flex-col"
    >
      <div className="flex justify-center items-center p-4 w-full max-w-5xl gap-4 flex-wrap">
        {filters.map((filter) => (
          <div
            key={Math.random()}
            onClick={() => filterWorkHandler(filter.filter)}
            className={`hover:text-rose-500 cursor-pointer duration-500 ${
              filter.status && "text-rose-500"
            }`}
          >
            {filter.text}
          </div>
        ))}
      </div>
      <div
        ref={parent}
        className={`relative grid ${
          filteredWorkList.length <= 1 ? "md:grid-cols-1" : "md:grid-cols-2"
        } gap-8 w-full max-w-5xl mt-10 p-4`}
      >
        {filteredWorkList.length === 0 && (
          <div className="relative flex justify-center items-center bg-slate-800/30 backdrop-blur-md w-full h-96 rounded-xl border border-slate-600 z-30">
            Nothing to show here.
          </div>
        )}
        {filteredWorkList.map((work) => (
          <div
            key={work.title}
            className="relative flex gap-2 flex-col justify-center items-start p-8 bg-slate-800/30 backdrop-blur-md w-full h-96 rounded-xl border border-slate-600 z-30"
          >
            <div className="bg-rose-500 w-12 h-12 rounded-md flex justify-center items-center text-xl font-bold">
              {work.mainLang}
            </div>
            <div className="text-xl">{work.title}</div>
            <div className="text-sm text-slate-500">{work.longDescription}</div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {work.usedWhileWorking.map((used) => (
                <div
                  key={work.title + Math.random()}
                  className="text-xs p-1 tracking-wider border opacity-40 rounded-md"
                >
                  {used}
                </div>
              ))}
            </div>
            <div
              onClick={() => {
                setSelectedWork(work);
                setWorkModalActive(true);
              }}
              className="mt-10 text-rose-500 w-14 h-6 flex items-center justify-start cursor-pointer group p-4 pl-0"
            >
              <div className="group-hover:translate-x-10 duration-500 group-hover:opacity-0">
                Details
              </div>
              <div className="group-hover:-translate-x-8 -translate-x-16 opacity-0 group-hover:opacity-100 duration-500">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
        ))}

        <div
          className={`absolute w-full overflow-hidden z-10 duration-1000 pointer-events-none scale-100 xl:scale-125 translate-y-0 xl:translate-y-14 ${
            filteredWorkList.length <= 4 && "opacity-10"
          } `}
        >
          <div className="scale-150 translate-y-96 md:translate-y-20 h-[1500px] md:scale-100">
            {circles}
          </div>
        </div>
      </div>
      <Work
        onBackdropClicked={() => setWorkModalActive(false)}
        show={workModalActive}
        currentWork={selectedWork}
      />
    </div>
  );
};

const circles = (
  <svg
    className="fill-rose-500 opacity-40"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 230 230"
  >
    <g>
      <g>
        <path
          d="M115.1,198c-45.5,0-82.5-37-82.5-82.5s37-82.5,82.5-82.5s82.5,37,82.5,82.5S160.6,198,115.1,198z M115.1,34.9
c-44.4,0-80.5,36.1-80.5,80.5c0,44.4,36.1,80.5,80.5,80.5c44.4,0,80.5-36.1,80.5-80.5C195.6,71.1,159.5,34.9,115.1,34.9z"
        />
      </g>
      <g>
        <path
          d="M115.1,226.2c-61,0-110.7-49.7-110.7-110.7S54.1,4.8,115.1,4.8c61,0,110.7,49.7,110.7,110.7
S176.1,226.2,115.1,226.2z M115.1,6.8C55.2,6.8,6.4,55.5,6.4,115.5s48.8,108.7,108.7,108.7c59.9,0,108.7-48.8,108.7-108.7
S175,6.8,115.1,6.8z"
        />
      </g>
      <g>
        <path
          d="M115.1,212.1c-53.3,0-96.6-43.3-96.6-96.6c0-53.3,43.3-96.6,96.6-96.6c53.3,0,96.6,43.3,96.6,96.6
C211.7,168.7,168.4,212.1,115.1,212.1z M115.1,20.9c-52.2,0-94.6,42.4-94.6,94.6s42.4,94.6,94.6,94.6c52.2,0,94.6-42.4,94.6-94.6
S167.3,20.9,115.1,20.9z"
        />
      </g>
      <g>
        <path
          d="M115.1,198c-45.5,0-82.5-37-82.5-82.5s37-82.5,82.5-82.5s82.5,37,82.5,82.5S160.6,198,115.1,198z M115.1,34.9
c-44.4,0-80.5,36.1-80.5,80.5c0,44.4,36.1,80.5,80.5,80.5c44.4,0,80.5-36.1,80.5-80.5C195.6,71.1,159.5,34.9,115.1,34.9z"
        />
      </g>
      <g>
        <path
          d="M115.1,182.9c-37.2,0-67.4-30.2-67.4-67.4c0-37.2,30.2-67.4,67.4-67.4c37.2,0,67.4,30.2,67.4,67.4
C182.5,152.6,152.3,182.9,115.1,182.9z M115.1,50.1c-36.1,0-65.4,29.3-65.4,65.4c0,36.1,29.3,65.4,65.4,65.4
c36.1,0,65.4-29.3,65.4-65.4C180.5,79.4,151.2,50.1,115.1,50.1z"
        />
      </g>
      <g>
        <path
          d="M115.1,169c-29.5,0-53.6-24-53.6-53.6c0-29.5,24-53.6,53.6-53.6c29.5,0,53.6,24,53.6,53.6
C168.7,145,144.6,169,115.1,169z M115.1,63.9c-28.4,0-51.6,23.1-51.6,51.6S86.7,167,115.1,167s51.6-23.1,51.6-51.6
S143.5,63.9,115.1,63.9z"
        />
      </g>
    </g>
  </svg>
);

const workList = [
  {
    title: "Food Order",
    mainLang: "JS",
    description:
      "Pizzaria is fully responsive ordering solution for restaurants.",
    longDescription:
      "Pizzaria is fully responsive ordering solution for restaurants. Note: Admin panel and ordering features might be disabled at live demo for security reasons.",
    thumbnail: "/images/works/pizzaria/screenshot.jpg",
    heroImage: "/images/works/pizzaria/screenshot01.jpg",
    usedWhileWorking: [
      "React",
      "Redux",
      "Tailwind",
      "Firebase",
      "Adobe After Effects",
    ],
    pageBgColor: "bg-red-600",
    baseColor: "bg-red-600",
    secondaryTextColor: "text-red-600",
    textColor: "text-red-600",
    category: "webApp",
    links: [
      {
        text: "Source Code </>",
        link: "https://github.com/barisonurme/food-order",
        buttonActive: true,
      },
      {
        text: "Live Demo",
        link: "https://foodorder-bfeb6.firebaseapp.com/",
        buttonActive: true,
      },
      {
        text: "Video",
        link: "https://www.youtube.com/embed/OoCiQ7yhu3k",
        buttonActive: true,
      },
    ],
  },
  {
    title: "Mobile Chat App",
    mainLang: "JS",
    description: "Real time message application with different features.",
    longDescription:
      "Chappter is real time message application build with React Native. You can login and start chatting with anyone, add profile picture, react recieved messages.",
    thumbnail: "/images/works/chappter/screenshot.jpg",
    heroImage: "/images/works/chappter/screenshot01.gif",
    usedWhileWorking: [
      "React Native",
      "Redux",
      "Firebase",
      "Adobe After Effects",
    ],
    pageBgColor: "bg-sky-500",
    baseColor: "bg-sky-500",
    secondaryTextColor: "text-sky-500",
    textColor: "text-sky-500",
    category: "mobileApp",
    links: [
      {
        text: "Source Code </>",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Live Demo",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Video",
        link: "https://www.youtube.com/embed/sZIic2ByJas",
        buttonActive: true,
      },
    ],
  },
  {
    title: "Mini Basketball",
    mainLang: "C#",
    description: "Hypercasual game with monetized system build in.",
    longDescription:
      "Hyper casual game with monetized system build in. Players must play the game and watch ads for better rewards.",
    thumbnail: "/images/works/minibasketball/screenshot.jpg",
    heroImage: "/images/works/minibasketball/screenshot01.jpg",
    usedWhileWorking: [
      "Unity3d",
      "Blender",
      "Photoshop",
      "Adobe After Effects",
    ],
    pageBgColor: "bg-indigo-500",
    baseColor: "bg-indigo-500",
    secondaryTextColor: "text-indigo-500",
    textColor: "text-indigo-500",
    category: "gameDev",
    links: [
      {
        text: "Source Code </>",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Live Demo",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Video",
        link: "https://www.youtube.com/embed/20E38xpgcD8",
        buttonActive: true,
      },
    ],
  },
  {
    title: "Workout Tracker",
    mainLang: "JS",
    description: "Fitness Tracker, helps users track their workout.",
    longDescription:
      "Fitness Tracker is a web site that helps users track their workout from phone or desktop. Users can login and track their daily activities such as calorie intake, water consumption, daily weight and workouts.",
    category: "webApp",
    thumbnail: "/images/works/trainmate/screenshot.png",
    heroImage: "/images/works/trainmate/screenshot01.gif",
    pageBgColor: "bg-zinc-800",
    baseColor: "bg-indigo-700",
    secondaryTextColor: "text-cyan-400",
    textColor: "text-indigo-700",
    usedWhileWorking: [
      "ReactJs",
      "Redux",
      "Firebase",
      "Adobe After Effects",
      "Figma",
    ],
    links: [
      {
        text: "Source Code </>",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Live Demo",
        link: "http://trainmate-b1a5f.firebaseapp.com",
        buttonActive: true,
      },
      {
        text: "Video",
        link: "https://www.youtube.com/embed/sZIic2ByJas",
        buttonActive: false,
      },
    ],
  },
  {
    title: "Weather App",
    mainLang: "JS",
    description: "Weather App.",
    longDescription:
      "Weather app that allows users search for city and add city to watch list. Used api called openweathermap.org.",
    category: "webApp",
    heroImage: "#",
    thumbnail: "#",
    pageBgColor: "bg-rose-500",
    baseColor: "bg-rose-500",
    secondaryTextColor: "text-rose-500",
    textColor: "text-rose-500",
    usedWhileWorking: ["ReactJs", "Redux"],
    links: [
      {
        text: "Source Code </>",
        link: "https://github.com/barisonurme/weather-app",
        buttonActive: true,
      },
      {
        text: "Live Demo",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Video",
        link: "#",
        buttonActive: false,
      },
    ],
  },
  {
    title: "CBRT Currency Tracker",
    mainLang: "JS",
    description: "CBRT Currency Tracker.",
    longDescription:
      "The Central Bank of the Republic of Turkey currency tracker. Users can register and login through Node.JS server.",
    category: "webApp",
    thumbnail: "#",
    heroImage: "#",
    pageBgColor: "bg-rose-500",
    baseColor: "bg-rose-500",
    secondaryTextColor: "text-rose-500",
    textColor: "text-rose-500",
    usedWhileWorking: ["ReactJs", "Redux"],
    links: [
      {
        text: "Source Code </>",
        link: "https://github.com/barisonurme/tcbm-kurlari",
        buttonActive: true,
      },
      {
        text: "Live Demo",
        link: "#",
        buttonActive: false,
      },
      {
        text: "Video",
        link: "#",
        buttonActive: false,
      },
    ],
  },
];

const filters = [
  {
    text: "All Projects",
    status: true,
    filter: "all",
  },
  {
    text: "Web Development",
    status: false,
    filter: "webApp",
  },
  {
    text: "Mobile App",
    status: false,
    filter: "mobileApp",
  },
  {
    text: "Graphic Design",
    status: false,
    filter: "graphicDesign",
  },
  {
    text: "Motion Graphics",
    status: false,
    filter: "motionGraph",
  },
  {
    text: "Game Development",
    status: false,
    filter: "gameDev",
  },
];

export default Works;
