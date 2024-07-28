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
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext();

const ComponentA = () => {

    const [user, setUser] = useState("AppDev");
    const [userLevel, setUserLevel] = useState("Admin");

    return (
        <div className='box'>
            <h3>ComponentA</h3>
            <h4>{`User Name : ${user}`}</h4>
            <UserContext.Provider value={ userLevel }>
                <ComponentB user={user} />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA