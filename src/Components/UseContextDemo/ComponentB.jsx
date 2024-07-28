import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
    return (
        <div className='box'>
            <h3>ComponentB</h3>
            <h4>{`User Name : ${props.user}`}</h4>
            <ComponentC user={props.user} />
        </div>
    )
}

export default ComponentB