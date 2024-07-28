import React from 'react'
import { useState, useEffect } from 'react'

const WindowResizeUseEffect = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    }
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`;
  }, [width, height]);

  // window.addEventListener("resize", handleResize);
  // console.log("EVENT LISTENER ADDED");

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width : {width} px</p>
      <p>Window Height : {height} px</p>
    </>
  )
}

export default WindowResizeUseEffect