// useCallback : Cache a function.

// [Step 1]
import React, { useState, memo, useCallback } from 'react'

const UseCallbackDemo = () => {
    const [count, setCount] = useState(0);
    // [Step 2]
    const [count2, setCount2] = useState(0);

    // [Step 4]
    const count2Callback = useCallback(() => {
        setCount2(count2 + 1);
    },[count2]); 
    // เป็นตัวบอก react ว่าให้สร้าง object หรือ function ใหม่หรือเปล่า

    return (
        <div>
            <h1>{count}</h1>
            {/* Inline methord !!! */}
            <button onClick={() => setCount(count + 1)}>+</button>

            {/* [Step 3] */}
            {/* <hr /><Child onClick={() => setCount2(count + 1)} /><hr /> */}

            {/* [Step 5] */}
            <hr /><Child onClick={count2Callback} /><hr />
        </div>
    )
}

// Normal component.
// const Child = () => {
//     console.log("Child rendered...");
//     return (<div>Child rendered...</div>)
// }

// Pure component.
const Child = memo(() => {
    console.log("Child rendered...");
    return (<div>Child rendered...</div>)
});

export default UseCallbackDemo