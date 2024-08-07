import React, { useContext } from 'react';
import { UserContext } from './ComponentA';

const ComponentD = (props) => {

    const userLevel = useContext(UserContext);
    //console.log(userLevel);

    return (
        <div className='box'>
            <h3>ComponentD</h3>
            <h4>{`User Name : ${props.user}`}</h4>
            <h4>{`User Level : ${userLevel}`}</h4>
        </div>
    )
}

export default ComponentD