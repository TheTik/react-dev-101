// React hook = Special function that allows functional components
//              to use React features without writhing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback and more...)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Virtual DOM.

import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = ()=> {
        setCount(count + 1);
    }

    const handleDecrement = ()=> {
        setCount(count - 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default Counter