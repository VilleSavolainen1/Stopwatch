import React, { useState, useEffect } from "react";
import "../App.css";

const Stopwatch = ({
  isrunning,
  setIsrunning,
  time,
  setTime,
  start,
  setStart,
}) => {
  const startTimer = () => {
    if (isrunning) {
      setStart(time += 1);
      setInterval(() => {
        setTime(start += 1);
      }, 100);
    }else{
        setTime(0);
        setStart(0)
    }
  };

  useEffect(() => {
    startTimer();
  }, [isrunning]);


  const handleClick = () => {
    if(!isrunning){
        setIsrunning(true)
        }else{
            setIsrunning(false)
        }
    }
  
  let millisecond = ("0" + time).slice(-1);
  let second = ("0" + (Math.floor(time / 10) % 60)).slice(-2);
  let minute = ("0" + (Math.floor(time / 600) % 100)).slice(-2);


  return (
    <div className="container">
      {minute}:{second}:{millisecond}
      <button onClick={handleClick}>Start</button>
    </div>
  );
};

export default Stopwatch;
