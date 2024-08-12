// useContext() = React Hook that allows you to share value
//                between multiple levels of components
//                without passing prop through each level

// PROVIDER COMPONENT
// 1. import { createContext } from 'react'
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value} >
//      <Child />
//    </MyContext.Provide>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './Component';
// 2. const value = useContext(MyContext);

1) Crate css on App.css
***************************************************************************************************
.box{
  border: 3px solid;
  padding:  25px;
}
***************************************************************************************************

2) Crate a folder and file as below details.
 /src/Component/UseContextDemo/ComponentA.jsx
 /src/Component/UseContextDemo/ComponentB.jsx
 /src/Component/UseContextDemo/ComponentC.jsx
 /src/Component/UseContextDemo/ComponentD.jsx

# refce all files.

 3) 
Implement ComponentA componet at App.jsx
...
import ComponentA from "./Components/UseContextDemo/ComponentA";
import './App.css';
...
<ComponentA />
...

4) Edit file ComponentA.jsx
***************************************************************************************************
import React from 'react'

// [Step 1]
import ComponentB from './ComponentB'

const ComponentA = () => {

    [Stpe 2]
    return (
        <div className='box'>
            <h3>ComponentA</h3>
            <ComponentB />
        </div>
    )
}

export default ComponentA
***************************************************************************************************

5) Edit file ComponentB.jsx
***************************************************************************************************
import React from 'react'

// [Step 1]
import ComponentC from './ComponentC'

// [Step 2] Add props parameter
const ComponentB = (props) => {

    // [Step 3]
    return (
        <div className='box'>
            <h3>ComponentB</h3>
            <ComponentC />
        </div>
    )
}

export default ComponentB
***************************************************************************************************

6) Edit file ComponentC.jsx
***************************************************************************************************
import React from 'react'

// [Step 1]
import ComponentD from './ComponentD'

// [Step 2] Add props parameter
const ComponentC = (props) => {

    // [Step 3]
    return (
        <div className='box'>
            <h3>ComponentC</h3>
            <ComponentD />
        </div>
    )
}

export default ComponentC
***************************************************************************************************

6) Edit file ComponentD.jsx
***************************************************************************************************
import React from 'react'

// [Step 1] Add props parameter
function ComponentD(props) {

    // [Step 2]
    return (
        <div className='box'>
            <h3>ComponentD</h3>
        </div>
    )

}

export default ComponentD
***************************************************************************************************

6) Edit file ComponentA.jsx for passing props to a Component
***************************************************************************************************
// [Step 1] Import useState
import React, { useState } from 'react'

import ComponentB from './ComponentB'

const ComponentA = () => {

    // [Step 2]
    const [user, setUser] = useState("AppDev");

    return (
        <div className='box'>        
            <h3>ComponentA</h3>

            // [Step3]
            <h4>{`User Name : ${user}`}</h4>

            // [Step4]
            <ComponentB user={user}/>

        </div>
    )
}

export default ComponentA
***************************************************************************************************

7) Edit file ComponentB.jsx for passing props to a Component
***************************************************************************************************
import React from 'react'

import ComponentC from './ComponentC'

const ComponentB = (props) => {
    return (
        <div className='box'>
            <h3>ComponentB</h3>

            // [Step 1]
            <h4>{`User Name : ${props.user}`}</h4>

            // [Step 2]
            <ComponentC user={props.user}  />

        </div>
    )
}

export default ComponentB
***************************************************************************************************

8) Edit file ComponentC.jsx for passing props to a Component
***************************************************************************************************
import React from 'react'

import ComponentD from './ComponentD'

const ComponentC = (props) => {
  return (
        <div className='box'>
            <h3>ComponentC</h3>

            // [Step 1]
            <h4>{`User Name : ${props.user}`}</h4>

            // [Step 2]
            <ComponentD user={props.user} />
            
        </div>
  )
}

export default ComponentC

9) Edit file ComponentD.jsx for passing props to a Component
***************************************************************************************************
import React from 'react'

function ComponentD(props) {
    return (
        <div className='box'>
            <h3>ComponentD</h3>

            // [Step 1]
            <h4>{`User Name : ${props.user}`}</h4>
            
        </div>
    )
}

export default ComponentD

10) Explain about UserContext : Edit file ComponentA.jsx for crate Provider
***************************************************************************************************
// [Step 1] Import createContext
import React, { useState, createContext } from 'react'

import ComponentB from './ComponentB'

// [Step 2] Implement createContext
export const UserContext = createContext();

const ComponentA = () => {

    const [user, setUser] = useState("AppDev");

    // [Step 3]
    const [userLevel, setUserLevel] = useState("Admin");

    return (
        <div className='box'>
            <h3>ComponentA</h3>

            <h4>{`User Name : ${user}`}</h4>   

            // [Step 4]
            <UserContext.Provider value={ userLevel }>
                <ComponentB user={user} />
            </UserContext.Provider>
            
        </div>
    )
}

export default ComponentA

11) Explain about useContext : Edit file ComponentD.jsx
***************************************************************************************************

// [Step 1] Import useContext
import React, { useContext } from 'react';

// [Step 2]
import { UserContext } from './ComponentA';

const ComponentD = (props) => {

    [Step 3]
    const userLevel = useContext(UserContext);
    //console.log(userLevel);

    return (
        <div className='box'>
            <h3>ComponentD</h3>
            <h4>{`User Name : ${props.user}`}</h4>

            [Step 4]
            <h4>{`User Level : ${userLevel}`}</h4>

        </div>
    )
}

export default ComponentD