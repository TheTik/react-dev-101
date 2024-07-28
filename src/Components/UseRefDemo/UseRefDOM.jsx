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
    console.log(inputRef);

    function handleClick() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

    return (
        <>
            <button onClick={handleClick}>Click me !!!</button>
            <input ref={inputRef} />
        </>
    )
}

export default UseRefDOM