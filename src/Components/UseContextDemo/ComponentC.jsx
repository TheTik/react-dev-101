import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = (props) => {
    return (
        <div className='box'>
            <h3>ComponentC</h3>
            <h4>{`User Name : ${props.user}`}</h4>
            <ComponentD user={props.user} />
        </div>
    )
}

export default ComponentC