// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//             When you want a component to "remember" some information,
//             but you don't want that informatin to trigger new renders.

//             via object "current"

//             1. Accessing/Interacting with DOM elements.
//             2. Handling Focus, Animations, and Transitions. 
//             3. Managing Timers and Intervals.

1) UseRefDOM.jsx
2) Stopwatch.jsx

//################################################################################################# 
// UseRefDOM.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/UseRefDemo/UseRefDOM.jsx"

// [Step 2] # rafce

import React from 'react'

// [Step 4]
import { useState, useEffect, useRef } from 'react'

const UseRefDOM = () => {

    /*
        [Step 3]
        Implement UseRefDOM componet at App.jsx
        ...
        import UseRefDOM from "./Components/UseRefDemo/UseRefDOM";
        ...
        <UseRefDOM />
        ...
    */

    // [Step 5]
    const inputRef = useRef(null);
    //console.log(inputRef);

    // [Step 8]
    const inputCountRef = useRef(0);
    const intervalIdRef = useRef(null);

    // [Step 10]
    useEffect(() => {
        console.log("Side effect...");

        intervalIdRef.current = setInterval(() => {
            const value = parseInt(inputCountRef.current.value);
            inputCountRef.current.value = value ? value + 1 : 1;
        }, 1000);
        //console.log("Interval Id : ", intervalIdRef.current);
        
        // [Step 12]
        // Specify how to clean up after this effect:
        //return () => {
        //    console.log("Cleanup... Interval Id : ", intervalIdRef.current);
            //clearInterval(intervalIdRef.current);
        //}
    }, []);

    // [Step 7]
    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    // [Step 11]
    // ถ้า React.StrictMode ทำงานอยู่ โปรแกรมจะไม่ทำงาน เพราะเกิด Side effect สองรอบ 
    // พอเรากดจะเป็นการ clear interval หลังสุด ซื่งเราต้องการทำลายค่าแรงโปรแกรมเลยไม่ทำงาน
    // เราต้องใ้ห Clean Up ใน useEffect เข้าช่วย    
    function handleStop() {
        clearInterval(intervalIdRef.current);
        //console.log("Stop interval Id : ", intervalIdRef.current);
    }

    return (
        <>
            // [Step 6]
            <input ref={inputRef} />
            <button onClick={handleClick}>Click me !!!</button><br />

            // [Step 9]
            <input ref={inputCountRef} />
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default UseRefDOM

//################################################################################################# 
// Stopwatch.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/UseRefDemo/Stopwatch.jsx"

// [Step 2] # rafce

// [Step 4] Import useState, useEffect and useRef 
import React, { useState, useEffect, useRef } from 'react'

const Stopwatch = () => {

    /*
        [Step 3]
        Implement Stopwatch componet at App.jsx
        ...
        import Stopwatch from "./Components/UseRefDemo/Stopwatch";
        ...
        <Stopwatch />
        ...
    */

  // [Step 5]
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // [Step 6]
  const intervalIdRef = useRef(null); // keep interval Id
  const startTimeRef = useRef(0);

  // [Step 7]
  /*
    useEffect(() => {

    }, [isRunning]);

    function start() {

    }

    function stop() {

    }

    function reset() {

    }

    function formatTime() {
        return `00:00:00`;
    }
  */

  useEffect(() => {

    // [Step 11]
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
    // [Step 8]
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  }

  function stop() {
    // [Step 9]
    setIsRunning(false);
  }

  function reset() {
    // [Step 10]
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    // [Step 12]

    // useState() = A React hook that allows the creation of a stateful variable
    //              AND a setter function to update its value in the Virtual DOM.

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