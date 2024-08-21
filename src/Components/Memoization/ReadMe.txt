// ส่วนใหญ่จะใช้กับการ tuning performanc เช่นพวกโปรแกรมที่คำนวณที่ใช้เวลานาน 
// ยกตัวอย่าง มีเพือนเดินมาถามฟีโบนัชชีของ 7 เท่ากับเท่าไหร่ เราก็คิดไป....
// เริ่มจาก 1+1 = 2,
          1+2 = 3, 
          2+3 = 5, 
          3+5 = 8,
          5+8 = 13,
          8+13 = 21,
          13+21 = 34
// เราก็ตอบไปว่า 34 และมีเพื่อนคนที่สองมากถามอีกแต่เราคำนวณไว้แล้วแล้วเราก็จำได้ว่าเป็น 34 เราก็ตอบไปเลยไม่ต้องคำนวฯ แต่การใช้มากเกินไปก็ส่งผลไม่ดีเช่นกัน

// memo : เป็น Higher Order Component และมันจะทำการ memoization เหมือน PureComponent ทุกประการ 
// จะ render เฉพาะตอน Props เปลี่ยน คือ Props เหมือนเดิม Output ก็ต้องได้อย่างเดิม
// How components get rerendered.
// - Parent get rendered. [Focus this topic]
// - States or props change.
// - Hooks. E.g. useContext.
// - forceUpdate called.
// Make component "pure component" 
// - Using React.memo
// - Pure component : จะ render เฉพาะเวลาที่ Props มีการเปลี่ยนแปลง
// - Only rerendered if props changed.     

// useCallback : Cache a function.
// useMemo : Cache a component rendered.

1) ReactMemo.jsx
2) UseCallbackDemo.jsx
3) UseMemoDemo.jsx

//################################################################################################# 
// ReactMemo.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/Memoization/ReactMemo.jsx"

// [Step 2] # rafce

// [Step 4] Import useState and memo
import React, { useState, memo } from 'react'

const ReactMemo = () => {

    /*
        [Step 3]
        Implement ReactMemo componet at App.jsx
        ...
        import ReactMemo from './Components/Memoization/ReactMemo'
        ...
        <ReactMemo />
        ...
    */

    // [Step 5]
    const [count, setCount] = useState(0);

    // [Step 6]
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>

            // [Step 8]
            <hr/><Child /><hr/>

        </div>
    )
}

// [Step 7] Side effects คือการดำเนินการที่เกิดขึ้นนอกขอบเขตของวงจรการ render ของคอมโพเนนต์
 const Child = () => {
     console.log("Child rendered...");
     return (<div>Child rendered...</div>)
}

//[Step 9] Implement memo ทำให้เป็น Pure component คือ Props เหมือนเดิม Output ก็ต้องได้อย่างเดิม
const Child = memo(() => {
    console.log("Child rendered...");
    return (<div>Child rendered...</div>)
});

//################################################################################################# 
// UseCallbackDemo.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/Memoization/UseCallbackDemo.jsx"

// [Step 2] # rafce

// [Step 4] Import useState, memo and useCallback
import React, { useState, memo, useCallback } from 'react'

const UseCallbackDemo = () => {

    /*
        [Step 3]
        Implement UseCallbackDemo componet at App.jsx
        ...
        import UseCallbackDemo from './Components/Memoization/UseCallbackDemo'
        ...
        <UseCallbackDemo />
        ...
    */

    // [Step 5]
    const [count, setCount] = useState(0);   
    const [count2, setCount2] = useState(0);

    // [Step 9]
    // useCallback เป็น React Hook อันนึงที่ใช้สำหรับจัดเก็บ cache ของ function 
    // ช่วยลดการสร้าง function ใหม่ในการ render ในแต่ละครั้งที่เกิดการ render ซ้ำของ component.
    const count2Callback = useCallback(() => {
        setCount2(count2 + 1);
    },[count2]); 
    // ตรวจสอบการทำงานเฉพาะ count2 เท่านั้น

    return (
        <div>
            // [Step 6]
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>

            // [Step 8] !!! Stop อธิบายโปรแกรมก่อน !!!
            <hr /><Child onClick={() => setCount2(count + 1)} /><hr />

            [Step 10]  !!! Stop อธิบายโปรแกรมก่อน !!!
            <hr /><Child onClick={count2Callback} /><hr />
        </div>
    )
}

[Step 7] Side effects คือการดำเนินการที่เกิดขึ้นนอกขอบเขตของวงจรการ render ของคอมโพเนนต์
const Child = () => {
     for (let i = 0; i < 1000; i++) console.log("Child rendered...");
     return (<div>Child rendered...</div>)
}

// [Step 11] Implement memo ทำให้เป็น Pure component คือ Props เหมือนเดิม Output ก็ต้องได้อย่างเดิม
const Child = memo(() => {
    for (let i = 0; i < 1000; i++) console.log("Child rendered...");
    return (<div>Child rendered...</div>)
});

export default UseCallbackDemo

//################################################################################################# 
// UseMemoDemo.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/Memoization/UseMemoDemo.jsx"

// [Step 2] # rafce

// [Step 4] import useMemo
import React, { useState, memo, useMemo } from 'react'

// [Step 5]
const fibonacci = (num) => {
    var a = 1, b = 0, temp;
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }  

    for (let i = 0; i < 1000; i++) console.log("Fibonacci Calculator.");

    console.log("Result : ", b)
    return b;
}

const UseMemoDemo = () => {

    /*
        [Step 3]
        Implement UseMemoDemo componet at App.jsx
        ...
        import UseMemoDemo from './Components/Memoization/UseMemoDemo'
        ...
        <UseMemoDemo />
        ...
    */

    // [Step 6]
    const [count1, setCount1] = useState(35);
    const [count2, setCount2] = useState(0);
    
    // [Step 8] !!! อธิบาย !!!
    const fibo = fibonacci(count1);

    // [Step 10] !!! อธิบาย !!!
    // useMemo : Cache a component rendered.
    // useMemo ใช้สำหรับคำนวณค่าที่จะเก็บไว้ในตัวแปร และจะคำนวณค่าใหม่เมื่อค่าที่ใช้ในการคำนวณมีการเปลี่ยนแปลง
    const fibo = useMemo(() => {
        return fibonacci(count1);
    }, [count1]);
    // ตรวจสอบการทำงานเฉพาะ count1 เท่านั้น

    // [Step 9]
    return (
        <div>
            <h1>Count1 : {count1}</h1>
            <h1>Fibonacci : {fibo}</h1>
            <button onClick={() => setCount1(count1 + 1)}>Add count 1</button>
            <hr /><Child /><hr />
            <h1>Count2 : {count2}</h1>            
        </div>
    )
}

// [Step 7] Implement memo ทำให้เป็น Pure component คือ Props เหมือนเดิม Output ก็ต้องได้อย่างเดิม
const Child = memo(() => {
    for (let i = 0; i < 1000; i++) console.log("Child rendered...");
    return (<div>Child rendered...</div>)
});

export default UseMemoDemo<button onClick={() => setCount2(count2 + 1)}>Add count 2</button>