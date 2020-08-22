import React, { useState } from "react";
import "./App.css";
import Stopwatch from "./components/stopwatch";

function App() {
  const [isrunning, setIsrunning] = useState(false);
  const [start, setStart] = useState(0);
  const [time, setTime] = useState(0);


  return (
    <div>
      <Stopwatch
        isrunning={isrunning}
        setIsrunning={setIsrunning}
        start={start}
        setStart={setStart}
        time={time}
        setTime={setTime}
      />
    </div>
  );
}

export default App;
