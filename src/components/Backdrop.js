import React from "react";

const Backdrop = (props) => {
  const { show } = props;

  return (
    <>
      {show && (
        <div
          onClick={() => {
            props.onBackDropClick();
          }}
          className=" w-full h-screen bg-slate-900/80 backdrop-blur-sm fixed inset-0 z-40"
        ></div>
      )}
    </>
  );
};

export default Backdrop;
