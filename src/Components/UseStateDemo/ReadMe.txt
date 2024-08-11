// React hook = Special function that allows functional components
//              to use React features without writhing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback and more...)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Virtual DOM.

1) Counter
2) CRUDStringArray
3) GetFormData 

//################################################################################################# 
// Counter.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/UseStateDemo/Counter.jsx"

// [Step 2] # rafce

import React from 'react'

// [Step 3] Import useState
import { useState } from 'react'

const Counter = () => {

    /*
        [Step 4]
        Implement Counter componet at App.jsx
        ...
        import Counter from "./Components/UseStateDemo/Counter";
        ...
        <Counter />
        ...
    */

    // [Step 5]
    const [count, setCount] = useState(0);

    // [Step 7]
    const handleIncrement = ()=> {
        setCount(count + 1);
    }

    // [Step 8]
    const handleDecrement = ()=> {
        setCount(count - 1);
    }

    // [Step 6]
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default Counter

//################################################################################################# 
// CRUDStringArray.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/UseStateDemo/CRUDStringArray.jsx"

// [Step 2] # rafce

import React from 'react'

// [Step 3] Import useState
import { useState } from 'react'

const CRUDStringArray = () => {

    /*
        [Step 4]
        Implement CRUDStringArray componet at App.jsx
        ...
        import CRUDStringArray from "./Components/UseStateDemo/CRUDStringArray";
        ...
        <CRUDStringArray />
        ...
    */

    // [Step 5]
    const [data, setData] = useState(["AAA", "BBB", "CCC"]);

    // [Step 7]
    const handleAdd = ()=> {
        setData([...data, "EEE"]);
    }

    // [Step 8]
    const handRemove = ()=> {
        setData(data.filter((f) => f !== "EEE"));
    }

    // [Step 9]
    const handUpdate = ()=> {
        setData(data.map((f) => (f === "EEE" ? "!EEE!" : f)))
    }

    // [Step 6]
    return (
        <>
            {
                data.map((f) => (
                    <li key={Math.random()}>{f}</li>
                ))
            }

            <button onClick={handleAdd}>Add</button>
            <button onClick={handRemove}>Remove</button>
            <button onClick={handUpdate}>Update</button>
        </>
    )
}

export default CRUDStringArray

//################################################################################################# 
// GetFormData.jsx
//################################################################################################# 

// [Step 1]
// Crate a folder and file to "/src/Component/UseStateDemo/GetFormData.jsx"

// [Step 2] # rafce

// [Step 3] import useState
import React, { useState } from 'react'

const GetFormData = () => {

    /*
        [Step 4]
        Implement GetFormData componet at App.jsx
        ...
        import GetFormData from "./Components/UseStateDemo/GetFormData";
        ...
        <GetFormData />
        ...
    */

    [Step 5]
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    })

    [Step 7]
    const handleChange = (e) => {
        //console.log([e.target.name],e.target.value);
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    [Step 8]
    const handdleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    };

    [Step 6]
    return (
        <>
            <h1>Form Demo</h1>
            <form onSubmit={handdleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="mb-2 w-full rounded border p-2"
                />
                <br/>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="mb-2 w-full rounded border p-2"
                />
                <br/>
                <input
                    type="text"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="mb-4 w-full rounded border p-2"
                />
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default GetFormData