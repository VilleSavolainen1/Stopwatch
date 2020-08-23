import React, { useEffect } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import "../App.css";

const Stopwatch = ({ isrunning, setIsrunning, time, setTime }) => {
  const startTimer = () => {
    !isrunning ? setIsrunning(true) : setIsrunning(false);
  };

  useEffect(() => {
    let interval = null;
    if (isrunning) {
      interval = setInterval(() => {
        setTime((time += 1));
      }, 100);
    } else if (!isrunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isrunning]);

  let millisecond = ("0" + time).slice(-1);
  let second = ("0" + (Math.floor(time / 10) % 60)).slice(-2);
  let minute = ("0" + (Math.floor(time / 600) % 100)).slice(-2);

  return (
    <div className="container">
      <div className="clock">
        {minute}:{second}:{millisecond}
      </div>
      <div className="info-text">Press "Space" to start and stop.</div>
      <KeyboardEventHandler
        handleKeys={["space"]}
        onKeyEvent={startTimer}
      ></KeyboardEventHandler>
    </div>
  );
};

export default Stopwatch;
