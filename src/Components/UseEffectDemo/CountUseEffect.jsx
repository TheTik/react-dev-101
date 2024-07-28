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

import { number } from 'prop-types';
import React from 'react'
import { useState, useEffect, useRef } from 'react'

const CountUseEffect = () => {

    const initialized = useRef(false)

    const [count, setCount] = useState(0);
    const [inputCount, setInputCount] = useState(0);

    const displayCount = () => {

        // one time in "npm run preview" ???
        // Remove this command <React.StrictMode> for fixed "Effect firing twice in development"
        //if ( count != 0) 
        // if (initialized.current === false) { ... }        

        console.log("First call on mount...");
        document.title = `Count: ${count}`;

        return () => {
            // SOME CLEANUP CODE
            console.log("Cleanup...");               
        }
    }

    // const displayCount = () => {
    //     if (initialized.current === false) {
    //         initialized.current = true

    //         console.log("First call on mount...");
    //         document.title = `Count: ${count}`;

    //         return () => {
    //             // SOME CLEANUP CODE
    //             console.log("Cleanup...");               
    //         }
    //     } // end if : initialized.current
    // }

    // 1. useEffect(() => {}) : Runs after every re-render
    useEffect(displayCount);

    // 2. useEffect(() => {}, []) : Runs only on mount
    //useEffect(displayCount,[]);

    // 3. useEffect(() => {}, [value]) : Runs on mount + when value changes
    //useEffect(displayCount, [count])

    // Event handling
    const handleIncrement = () => { setCount(count + 1); }
    const handleDecrement = () => { setCount(count - 1); }
    const handleChangeInputCount = (e) => { setInputCount(e.target.value); }
    const handleSetCount = (e) => { setCount(parseInt(inputCount)); }

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