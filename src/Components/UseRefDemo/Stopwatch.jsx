import React, { useState, useEffect, useRef } from 'react'

const Stopwatch = () => {

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null); // keep interval Id
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        let elapsedTime = Date.now() - startTimeRef.current;
        console.log(elapsedTime);
        setElapsedTime(elapsedTime);
      }, 10);
    }

    return () => {
      console.log("Cleanup...");
      clearInterval(intervalIdRef.current);
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    //console.log(startTimeRef.current);

    // !!! Test @_@!!!
    // React hook = Special function that allows functional components
    //              to use React features without writhing class components (React v16.8)
    //              (useState, useEffect, useContext, useReducer, useCallback and more...)

    // useState() = A React hook that allows the creation of a stateful variable
    //              AND a setter function to update its value in the Virtual DOM.
    
    //setElapsedTime(elapsedTime+1);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    //console.log("Call set formatTime function.");
    //console.log(elapsedTime);

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <>
      <p>{formatTime()}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Stopwatch