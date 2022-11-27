import React from "react";

const Work = (props) => {
  const { show, currentWork } = props;
  return (
    <>
      {show && (
        <div
          onClick={() => props.onBackdropClicked()}
          className="bg-slate-800/10 backdrop-blur-lg w-full h-full z-40 fixed inset-0 justify-center items-center flex flex-col"
        >

          {/*  */}
          <div className="flex bg-slate-800/30 border border-slate-700 rounded-md w-full max-w-7xl h-[calc(calc(50vh-000px))] min-h-[500px]  overflow-hidden">
            <div className="w-full flex justify-center items-center">
              <div className="relative w-full h-[calc(calc(50vh-000px))] min-h-[500px] bg-gray-500 flex justify-between">
                <div className=" h-[calc(calc(50vh-000px))] min-h-[500px] flex justify-center items-center p-4">
                  {"<"}
                </div>
                <div className=" h-[calc(calc(50vh-000px))] min-h-[500px] flex justify-center items-center p-4">
                  {">"}
                </div>
                <div className="absolute w-full h-12 flex justify-center items-center bottom-0 gap-1">
                  <div className="w-2 h-2 rounded-full bg-white"/>
                  <div className="w-2 h-2 rounded-full bg-white"/>
                  <div className="w-2 h-2 rounded-full bg-white"/>
                  <div className="w-2 h-2 rounded-full bg-white"/>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="w-full flex justify-start p-10 items-center">
              <div className="flex flex-col">
                <div className="text-xl">{currentWork.title}</div>
                <div className="text-slate-300/30">
                  {currentWork.longDescription}
                </div>
                <div className="flex gap-2 mt-2">
                  {currentWork.usedWhileWorking.map((used) => (
                    <div
                      key={currentWork.title + Math.random()}
                      className="text-xs p-1 tracking-wider border opacity-40 rounded-md"
                    >
                      {used}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
