import React, { useState, useEffect } from "react";
import "./App.css";
import Stopwatch from "./components/stopwatch";

function App() {
  const [isrunning, setIsrunning] = useState(false);
  const [time, setTime] = useState(0);
  const [runned, setRunned] = useState(false);

  console.log(runned)
  return (
    <div>
      <Stopwatch
        isrunning={isrunning}
        setIsrunning={setIsrunning}
        time={time}
        setTime={setTime}
        runned={runned}
        setRunned={setRunned}
      />
    </div>
  );
}

export default App;
