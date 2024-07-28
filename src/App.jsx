/* Topic Tutorial
- Overview crete react project and deploy
- Lifecycle
- Event
- props / Properties
- useState
- useEffect
- useRef
- useContext
- React Router DOM
  - RouterProvider, createBrowserRouter
  - useParams
  - Link
- React Redux 
  - Redux basic
  - Redux thunk
- Redux Toolkit

Packet install.
# npm install axios
# npm install react-router-dom
# npm install redux 
# npm install react-redux
# npm install redux-thunk
# npm install @reduxjs/toolkit
*/

//import DataTable from "./Components/DataTable";

// Crete react project and deploy
import ShowUsers from "./Components/FetchData/ShowUsers";

// Lifecycle demo
import CounterClass from "./Components/LifecycleDemo/CounterClass"

// Event demo : camelCase
import Event from "./Components/EventDemo/Event"

// props / Properties demo 
import StudentProps from "./Components/PropsDemo/StudentProps";
import StudentPropType from "./Components/PropsDemo/StudentPropType";
import StudentDefaultProps from "./Components/PropsDemo/StudentDefaultProps";

// useState demo
import Counter from "./Components/UseStateDemo/Counter";
import CRUDStringArray from "./Components/UseStateDemo/CRUDStringArray";
import GetFormData from "./Components/UseStateDemo/GetFormData";

// useEffect demo
import CountUseEffect from "./Components/UseEffectDemo/CountUseEffect";
import WindowResizeUseEffect from "./Components/UseEffectDemo/WindowResizeUseEffect";

// useRef demo
import UseRefDOM from "./Components/UseRefDemo/UseRefDOM";
import Stopwatch from "./Components/UseRefDemo/Stopwatch";

// useContext demo
import ComponentA from "./Components/UseContextDemo/ComponentA";

// React Router DOM : Check code demo on main.jsx...  
// RouterProvider, createBrowserRouter
// useParams
// Link

// Redux basic [Counter] demo
import ReduxCounter from './Components/Redux/Pages/Counter'

// redux, react-redux and redux-thunk for UserReducer deom
// React Redux [UserReducer]

import './App.css';

function App() {

  return (
    <div className="App">
      {/* Hello AppDev !!! */}
      {/* <DataTable /> */}

      {/* +++++ ShowUsers demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <ShowUsers /> */}

      {/* +++++ Lifecycle demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <CounterClass /> */}

      {/* +++++ Event demo : camelCase ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <Event /> */}

      {/* +++++ props demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <StudentProps name="AppDev_1" age={18} isStudent={true} />
      <StudentProps name="AppDev_2" age={20} isStudent={false} /> */}

      {/* <StudentPropType name="AppDev_1" age="18" isStudent={true} />
      <StudentPropType name="AppDev_2" age={20} isStudent={false} /> */}

      {/* <StudentDefaultProps name="AppDev_1" age="18" isStudent={true} />
      <StudentDefaultProps /> */}

      {/* +++++ useState demo +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <Counter />  */}
      {/* <CRUDStringArray /> */}
      {/* <GetFormData /> */}

      {/* +++++ useEffect demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <CountUseEffect /> */}
      {/* <WindowResizeUseEffect /> */}

      {/* +++++ useRef demo +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <UseRefDOM /> */}
      {/* <Stopwatch /> */}

      {/* +++++ useContext demo +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <ComponentA /> */}

      {/* +++++ Redux basic Counter demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <ReduxCounter /> */}
    
    </div>
  );
}

export default App;
