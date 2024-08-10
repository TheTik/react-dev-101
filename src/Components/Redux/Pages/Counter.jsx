import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, setCount } from '../Actions/CounterActions'

const Counter = () => {

    const dispatch = useDispatch();
    const [newCount, setNewCount] = useState(0);
    
    // main -> App -> CombineStore -> rootReducer.counter
    const { counter } = useSelector(state => ({ ...state })); // subscribe data

    return (
        <div>
            <h2>Counter: {counter.count}</h2>
            <button onClick={() => dispatch(increment())} >Increment</button>
            <button onClick={() => dispatch(decrement())} >Decrement</button>
            <div>
                <input
                    trype="number"
                    value={newCount}
                    onChange={(e) => setNewCount(Number(e.target.value))}
                />
                <button onClick={() => dispatch(setCount(newCount))} >Set Count</button>
            </div>            
        </div>
    )
}

export default Counter