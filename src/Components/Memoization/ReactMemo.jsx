// How components get rerendered.
// - Parent get rendered. [Focus this topic]
// - States or props change.
// - Hooks. E.g. useContext.
// - forceUpdate called.
// Make component "pure component"
// - Using React.memo
// - Pure component
// - Only rerendered if props changed.     

//[Step 1] import memo
import React, { useState, memo } from 'react'

const ReactMemo = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            {/* Inline methord !!! */}
            <button onClick={() => setCount(count + 1)}>+</button>
            <hr/><Child /><hr/>
        </div>
    )
}

//[Step 2]
// Normal component.
// const Child = () => {
//     console.log("Child rendered...");
//     return (<div>Child rendered...</div>)
// }

//[Step 3] Implement memo
// Pure component.
const Child = memo(() => {
    console.log("Child rendered...");
    return (<div>Child rendered...</div>)
});

export default ReactMemo