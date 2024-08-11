// defaultProps = default values for props in case they are not 
//                passed from the parent component
//                name: "Guest"

import React from 'react'

import PropTypes from 'prop-types' // npm install prop-types

const StudentDefaultProps = (props) => {
  return (
    <>
      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" :  "No"}</p>
        <hr />
      </div>      
    </>
  )
}

StudentDefaultProps.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

StudentDefaultProps.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}


export default StudentDefaultProps