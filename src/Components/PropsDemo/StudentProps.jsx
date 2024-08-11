// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value>

import React from 'react'

const StudentProps = (props) => {
  return (
    <>
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        <hr />
      </div>
    </>
  )
}

export default StudentProps