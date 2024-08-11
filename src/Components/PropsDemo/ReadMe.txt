1) StudentProps.jsx
2) StudentPropType.jsx
3) StudentDefaultProps.jsx

//################################################################################################# 
// StudentProps.jsx
//################################################################################################# 

// [Step 0]
// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value>

// [Step 1]
// Crate a folder and file to "/src/Component/PropsDemo/StudentProps.jsx"

// [Step 2] # rafce

import React from 'react'

// [Step 3] Add props parameter
const StudentProps = (props) => {

  /*
    [Step 4]
    Implement StudentProps componet at App.jsx
    ...
    import StudentProps from "./Components/PropsDemo/StudentProps";
    ...
      <StudentProps />
    ...

    [Step 6]
    ...
      <StudentProps name="AppDev_1" age={18} isStudent={true} />
      <StudentProps name="AppDev_2" age={20} isStudent={false} /> 
    ...
  */

  // [Step 5]
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

//################################################################################################# 
// StudentPropType.jsx
//################################################################################################# 

// [Step 0]
// propType = a mechaism that ensures that the passed value
//            is of the correct datatype.
//            age : PropTypes.number

// [Step 1]
// Crate a folder and file to "/src/Component/PropsDemo/StudentPropType.jsx"

// [Step 2] # rafce

import React from 'react'

// [Step 3] : Import PropTypes
import PropTypes from 'prop-types' // npm install prop-types

// [Step 4] Add props parameter
function StudentPropType(props) {

  /*
    [Step 6]
    Implement StudentProps componet at App.jsx
    ...
    import StudentPropType from "./Components/PropsDemo/StudentPropType";
    ...
      <StudentPropType />
    ...

    [Step 8]
    ...
      <StudentPropType name="AppDev_1" age="18" isStudent={true} />
      <StudentPropType name="AppDev_2" age={20} isStudent={false} /> 
    ...
  */

  // [Step 5]
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

// [Step 7] Implement prototype
StudentPropType.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default StudentPropType

//################################################################################################# 
// StudentDefaultProps.jsx
//################################################################################################# 

// [Step 0]
// defaultProps = default values for props in case they are not 
//                passed from the parent component
//                name: "Guest"

// [Step 1]
// Crate a folder and file to "/src/Component/PropsDemo/StudentDefaultProps.jsx"

// [Step 2] # rafce

import React from 'react'

// [Step 3] : Import PropTypes
import PropTypes from 'prop-types' // npm install prop-types

// [Step 4] Add props parameter
const StudentDefaultProps = (props) => {

  /*
    [Step 6]
    Implement StudentProps componet at App.jsx
    ...
    import StudentDefaultProps from "./Components/PropsDemo/StudentDefaultProps";
    ...
      <StudentDefaultProps />
    ...

    [Step 9]
    ...
      <StudentDefaultProps name="AppDev_1" age="18" isStudent={true} />
      <StudentDefaultProps /> 
    ...
  */

  // [Step 5]
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

// [Step 7]
StudentDefaultProps.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// [Step 8]
StudentDefaultProps.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default StudentDefaultProps