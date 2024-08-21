/* 
Topic Tutorial  
- Overview crete react project and deploy
- Lifecycle
- Event
- props / Properties
- useState
- useEffect
- useRef
- Memoization
  - memo
  - useCallback
  - useMemo
- useContext
- React Router DOM : UserCRUDDemo
  - RouterProvider, createBrowserRouter
  - useParams
  - Link
- React Redux : UserReducer
  - Redux basic
  - Redux thunk
- Redux Toolkit
- How to convert ACE HTML Template to React JS
- LoginJWT
- react-hook-form
*/

// Crete react project and deploy
import ShowUsers, { HelloAppDev } from "./Components/FetchData/ShowUsers";

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

// Memoization
import ReactMemo from './Components/Memoization/ReactMemo'
import UseCallbackDemo from './Components/Memoization/UseCallbackDemo'
import UseMemoDemo from './Components/Memoization/UseMemoDemo'

// useContext demo
import ComponentA from "./Components/UseContextDemo/ComponentA";

// Components name is [UserCRUDDemo]. Check code demo on main.jsx...
// - React Router DOM 
// - RouterProvider, createBrowserRouter
// - useParams
// - Link

// Redux basic [Counter] demo
import ReduxCounter from './Components/Redux/Pages/Counter'

// Components name is [UserReducer]. Check code demo on main.jsx...
// - redux
// - react-redux
// - redux-thunk for UserReducer demo

// Components name is [ReduxToolkit]. Check code demo on main.jsx...
// Redux Toolkit

// Convert ACE HTML Template to React JS demo
import Home from './Components/HTMLTemplate/Template/Home'

// LoginJWT demo
// Check code demo on main.jsx...

// react-hook-form
import LoginJWT from './Components/FormValidation/Login'

import './App.css';

function App() {

  return (
    <div className="App">

      {/* Hello AppDev !!! */}
      {/* <DataTable /> */}

      {/* +++++ ShowUsers demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* /src/Components/FetchData/ShowUsers.jsx  */}
      {/* 
      <HelloAppDev />
      <ShowUsers /> 
      */}
      
      {/* +++++ Lifecycle demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* /src/Components/LifecycleDemo/CounterClass.jsx  */}
      {/* <CounterClass /> */}

      {/* +++++ Event demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* /src/Components/EventDemo/Event.jsx  */}
      {/* <Event /> */}

      {/* +++++ props demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* /src/Components/PropsDemo/StudentProps.jsx  */}
      {/* 
      <StudentProps name="AppDev_1" age={18} isStudent={true} />
      <StudentProps name="AppDev_2" age={20} isStudent={false} /> 
      */}

      {/* /src/Components/PropsDemo/StudentPropType.jsx  */}
      {/* 
      <StudentPropType name="AppDev_1" age="18" isStudent={true} />
      <StudentPropType name="AppDev_2" age={20} isStudent={false} /> 
      */}

      {/* /src/Components/PropsDemo/StudentDefaultProps.jsx  */}
      {/* 
      <StudentDefaultProps name="AppDev_1" age="18" isStudent={true} />
      <StudentDefaultProps /> 
      */}

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

      {/* +++++ Memoization +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}      
      {/* <ReactMemo /> */}
      {/* <UseCallbackDemo /> */}
      {/* <UseMemoDemo /> */}

      {/* +++++ useContext demo +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <ComponentA /> */}

      {/* +++++ Redux basic Counter demo ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <ReduxCounter /> */}
    
      {/* +++++ Convert ACE HTML Template to React JS demo ++++++++++++++++++++++++++++++++++++++++++ */}
      {/* <Home /> */}

      {/* +++++ react-hook-form demo +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <LoginJWT />

    </div>
  );
}

export default App;