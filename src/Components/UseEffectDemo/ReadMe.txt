// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one) :
//               - This component re-renders.
//               - This component mounts.
//               - This state of a value.

// useEffect(function, [dependencies])

// 1. useEffect(() => {})            // Runs after every re-render
// 2. useEffect(() => {}, [])        // Runs only on mount
// 3. useEffect(() => {}, [value])   // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Feching Data from an API
// #5 Clean up when a component unmounts

1) CountUseEffect.jsx
2) WindowResizeUseEffect.jsx

//################################################################################################# 
// CountUseEffect.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/UseEffectDemo/CountUseEffect.jsx"

// [Step 2] # rafce

import React from 'react'

//[Step 4]
import { useState, useEffect, useRef } from 'react'
import { number } from 'prop-types';

const CountUseEffect = () => {

    /*
        [Step 3]
        Implement CountUseEffect componet at App.jsx
        ...
        import CountUseEffect from "./Components/UseEffectDemo/CountUseEffect";
        ...
        <CountUseEffect />
        ...
    */

    //[Step 5]
    const [count, setCount] = useState(0);    
    const [inputCount, setInputCount] = useState(0);

    // [Step 7]
    const displayCount = () => {
  
        console.log("First call on mount...");
        document.title = `Count: ${count}`;

        return () => {
            // SOME CLEANUP CODE
            console.log("Cleanup...");
        }
    }

    // [Step 8]
    // สังเกตุ
    // - กด Reface 1 ครั้ง "First call on mount" ทำงานแต่ "Cleanup" ไม่ทำงาน
    //   แต่ถ้าเกิด side effect "Cleanup-Lifecycle" คือทำลาย last object และจะเริ่ม new mount process       
    // - State:count จะทำงานปกติ
    // - document.title จะ "เปลี่ยนแปลง" เมื่อเกิด side effect  
    useEffect(displayCount);

    // [Step 9]
    // สังเกตุ
    // - กด Reface 1 ครั้ง "First call on mount" ทำงานแต่ "Cleanup" ไม่ทำงาน
    //   แต่ถ้าเกิด side effect "Cleanup-Lifecycle" คือทำลาย last object และจะเริ่ม new mount process    
    // - State:count จะทำงานปกติ
    // - document.title จะ "ไม่เปลี่ยนแปลง" เมื่อเกิด side effect
    //useEffect(displayCount,[]);

    // [Step 11]
    // 3. useEffect(() => {}, [value]) : Runs on mount + when value changes
    // สังเกตุ    
    // - กด Reface 1 ครั้ง "First call on mount" ทำงานแต่ "Cleanup" ไม่ทำงาน
    //   แต่ถ้าเกิด side effect "Cleanup-Lifecycle" คือทำลาย last object และจะเริ่ม new mount process
    // - State:count จะทำงานปกติ
    // - document.title จะ "เปลี่ยนแปลง" เมื่อเกิด side effect   
    //useEffect(displayCount, [count])

    // !!! Stop อธิบาย !!!
    // [Step 7] : ถึงจุดนี้ให้เริ่ม อธิบายเรื่องการทำงานของ useState
    // Event handling
    const handleIncrement = () => { setCount(count + 1); }
    const handleDecrement = () => { setCount(count - 1); }
    const handleChangeInputCount = (e) => { setInputCount(e.target.value); }
    const handleSetCount = (e) => { setCount(parseInt(inputCount)); }

    // [Step 6]
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button><br />
            <input type="number" value={inputCount} onChange={handleChangeInputCount} />
            <button onClick={handleSetCount}>Set Count</button>
        </>
    )
}

export default CountUseEffect

//################################################################################################# 
// WindowResizeUseEffect.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/UseEffectDemo/WindowResizeUseEffect.jsx"

// [Step 2] # rafce

import React from 'react'

// [Step 4] Import useState and useEffect
import { useState, useEffect } from 'react'

const WindowResizeUseEffect = () => {

    /*
        [Step 3]
        Implement WindowResizeUseEffect componet at App.jsx
        ...
        import WindowResizeUseEffect from "./Components/UseEffectDemo/WindowResizeUseEffect";
        ...
        <WindowResizeUseEffect />
        ...
    */

  // [Step 5]
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // [Step 9] ทำให้ window.addEventListener ทำงานครั้งเดียว
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    }
  }, []);   

  // [Step 10] 
  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  // !!! Stop อธิบาย !!!
  // [Step 8] 
  // โปรแกรม work นะ แต่ EVENT LISTENER ADDED เพิ่มขึ้นไม่หยุด !!!
  // window.addEventListener("resize", handleResize);
  // console.log("EVENT LISTENER ADDED");

  // !!! Stop อธิบาย !!!
  // [Step 7] ลอง resize window State จำทำงาน แต่  UI จะไม่ทำงานตามค่าที่เปลี่ยน
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // [Step 6]
  return (
    <>
      <p>Window Width : {width} px</p>
      <p>Window Height : {height} px</p>
    </>
  )
}

export default WindowResizeUseEffect