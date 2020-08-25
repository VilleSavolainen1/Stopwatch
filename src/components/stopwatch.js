import React, { useEffect } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import "../App.css";

const Stopwatch = ({
  isrunning,
  setIsrunning,
  time,
  setTime,
  runned,
  setRunned,
}) => {
  const startTimer = () => {
    !isrunning ? setIsrunning(true) : setIsrunning(false);
  };

  useEffect(() => {
    let interval = null;
    if (isrunning) {
      interval = setInterval(() => {
        setTime((time += 1));
      }, 10);
      if (runned) {
        clearInterval(interval);
        setTime(0);
        setIsrunning(false);
      }
    } else if (!isrunning && time !== 0 && !runned) {
      clearInterval(interval);
      setRunned(true);
    } else if (!isrunning && runned) {
      setRunned(false);
      clearInterval(interval);
      setTime(0);
    }
    return () => clearInterval(interval);
  }, [isrunning]);

  let hundredths = ("0" + time).slice(-1)
  let decisecond = ("0" + (Math.floor(time / 10))).slice(-1)
  let second = ("0" + (Math.floor(time / 100) % 60)).slice(-2);
  let minute = ("0" + (Math.floor(time / 6000) % 100)).slice(-2);

  return (
    <div className="container">
      <div className="clock">
        {minute}:{second}:{decisecond}{hundredths}
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
