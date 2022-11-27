import React from "react";

const Tooltip = (props) => {
  const { text } = props;
  return (
    <div class="-translate-y-2 opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full px-3 pointer-events-none">
      {text}
      <svg
        class="absolute text-black h-2 w-full left-0 top-full"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
      >
        <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  );
};

export default Tooltip;
