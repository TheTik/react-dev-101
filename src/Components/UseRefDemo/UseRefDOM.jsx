// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//             When you want a component to "remember" some information,
//             but you don't want that informatin to trigger new renders.

//             via object "current"

//             1. Accessing/Interacting with DOM elements.
//             2. Handling Focus, Animations, and Transitions. 
//             3. Managing Timers and Intervals.

import React from 'react'
import { useState, useEffect, useRef } from 'react'

const UseRefDOM = () => {

    const inputRef = useRef(null);
    //console.log(inputRef);

    const inputCountRef = useRef(0);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        console.log("Side effect...");

        intervalIdRef.current = setInterval(() => {
            const value = parseInt(inputCountRef.current.value);
            inputCountRef.current.value = value ? value + 1 : 1;
        }, 1000);
        console.log("Interval Id : ", intervalIdRef.current);
        
        // Specify how to clean up after this effect:
        // return () => {
        //     console.log("Cleanup... Interval Id : ", intervalIdRef.current);
        //     clearInterval(intervalIdRef.current);
        // }
    }, []);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    function handleStop() {
        // ถ้า React.StrictMode ทำงานอยู่ โปรแกรมจะไม่ทำงาน เพราะเกิด Side effect สองรอบ 
        // พอเรากดจะเป็นการ clear interval หลังสุด ซื่งเราต้องการทำลายค่าแรงโปรแกรมเลยไม่ทำงาน
        // เราต้องใ้ห Clean Up ใน useEffect เข้าช่วย
        clearInterval(intervalIdRef.current);
        console.log("Stop interval Id : ", intervalIdRef.current);
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>Click me !!!</button><br />

            <input ref={inputCountRef} />
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default UseRefDOM