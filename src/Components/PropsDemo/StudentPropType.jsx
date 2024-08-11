// propType = a mechaism that ensures that the passed value
//            is of the correct datatype.
//            age : PropTypes.number

import React from 'react'

import PropTypes from 'prop-types' // npm install prop-types

function StudentPropType(props) {
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

StudentPropType.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default StudentPropType