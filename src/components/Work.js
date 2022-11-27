import React from "react";

const Work = (props) => {
  const { show, currentWork } = props;
  return (
    <>
      {show && (
        <div className="bg-slate-800/10 backdrop-blur-xl w-full h-screen z-40 p-10 fixed inset-0 justify-center items-center flex">
          {/*  */}
          <div className="flex flex-col md:flex-row  bg-slate-800/30 border border-slate-700 rounded-md w-full max-w-7xl min-h-[500px] overflow-hidden">
            <div className="w-full flex justify-center items-start md:items-center">
              <div className="relative w-full md:min-h-[500px] h-40 bg-gray-500 flex">
                <img src={currentWork.heroImage} className="object-cover" />
                {/* <div className=" min-h-[500px] flex justify-center items-center p-4 bg-gradient-to-r cursor-pointer duration-500">
                  {"<"}
                </div>
                <div className=" min-h-[500px] flex justify-center items-center p-4  bg-gradient-to-r cursor-pointer duration-500">
                  {">"}
                </div>
                <div className="absolute w-full h-12 flex justify-center items-center bottom-0 gap-1">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div> */}
              </div>
            </div>

            {/*  */}
            <div className="w-full flex justify-start p-10 items-center">
              <div className="flex flex-col">
                <div className="text-xl">{currentWork.title}</div>
                <div className="text-slate-300/30">
                  {currentWork.longDescription}
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <div className="flex  gap-2 mt-2  flex-wrap">
                      {currentWork.usedWhileWorking.map((used) => (
                        <div
                          key={currentWork.title + Math.random()}
                          className="text-xs p-1 tracking-wider border opacity-40 rounded-md whitespace-nowrap"
                        >
                          {used}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-2  flex-wrap">
                      {currentWork.links.map((link) => (
                        <div
                          onClick={() => {
                            if (!link.buttonActive) return;
                            if (link.text === "Video") {
                              // setVideoLink(link.link);
                              // setSecondContainer(true);
                              return;
                            }
                            window.open(`${link.link}`, "_blank");
                          }}
                          key={link.text}
                          className={`${
                            link.buttonActive
                              ? `${currentWork.baseColor} cursor-pointer`
                              : "bg-zinc-400 dark:bg-zinc-700 opacity-70 cursor-not-allowed"
                          } duration-500 hover:bg-zinc-900   text-white p-2 pl-4 pr-4 mr-2 mt-2 rounded-xl whitespace-nowrap`}
                        >
                          {link.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => props.onBackdropClicked()}
            className="bg-slate-800/10 backdrop-blur-xl w-full h-full -z-10 fixed inset-0 justify-center items-center flex flex-cols"
          ></div>
        </div>
      )}
    </>
  );
};

export default Work;
