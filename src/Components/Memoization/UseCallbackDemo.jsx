// [Step 1]
import React, { useState, memo, useCallback } from 'react'

const UseCallbackDemo = () => {
    const [count, setCount] = useState(0);
    // [Step 2]
    const [count2, setCount2] = useState(0);

    // [Step 4] 
    // useCallback : Cache a function.
    // useCallback เป็น React Hook อันนึงที่ใช้สำหรับจัดเก็บ cache ของ function 
    // ช่วยลดการสร้าง function ใหม่ในการ render ในแต่ละครั้งที่เกิดการ render ซ้ำของ component.
    const count2Callback = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);
    // ตรวจสอบการทำงานเฉพาะ count2 เท่านั้น

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

// Side effects คือการดำเนินการที่เกิดขึ้นนอกขอบเขตของวงจรการ render ของคอมโพเนนต์
// const Child = () => {
//     for (let i = 0; i < 1000; i++) console.log("Child rendered...");
//     return (<div>Child rendered...</div>)
// }

// Implement memo ทำให้เป็น Pure component คือ Props เหมือนเดิม Output ก็ต้องได้อย่างเดิม
const Child = memo(() => {
    for (let i = 0; i < 1000; i++) console.log("Child rendered...");
    return (<div>Child rendered...</div>)
});

export default UseCallbackDemo