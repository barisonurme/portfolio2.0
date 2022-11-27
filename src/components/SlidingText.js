import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

const SlidingText = (props) => {
  const { texts, time } = props;
  const [textsState, setTexts] = useState([]);
  const [countDown, setCountDown] = useState(0);

  let number = 0;
  useEffect(() => {
    for (let i = 0; i < texts.length; i++) {
      setTexts((textsState) => [...textsState, { text: texts[i], id: i }]);
    }
    setInterval(() => {
      if (number < texts.length - 1) number++;
      // eslint-disable-next-line
      else number = 0;
      setCountDown(number);
    }, time);
  }, []);

  return (
    <Fade delay={500} duration={3000}>
      <div className="-translate-y-2 relative text-rose-500 font-semibold md:text-8xl text-6xl tracking-wider overflow-hidden p-4 w-full h-28 justify-center items-center">
        {textsState.map((text) => (
          <div
            key={text.id}
            className={`absolute flex right-0 left-0 m-auto w-full justify-center items-center 
          ${countDown === text.id && "animate-slideIn"}
          ${countDown !== text.id && "animate-slideOff"}
          ease-in-out inset-0`}
          >
            {text.text.text}
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default SlidingText;
