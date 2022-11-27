import React from "react";

const Work = (props) => {
  const { show, currentWork } = props;
  return (
    <>
      {show && (
        <div className="bg-slate-800/10 backdrop-blur-lg w-full h-full z-40 fixed inset-0 justify-center items-center flex">
          {currentWork.title}
        </div>
      )}
    </>
  );
};

export default Work;
