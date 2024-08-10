###################################################################################################
[Counter]
###################################################################################################
Basic redux.

1) Crate redux structure.... 

1.1) Create folders.   
    - src/Components/Redux/Reducers
    - src/Components/Redux/Actions
    - src/Components/Redux/Pages

1.2) Create store "src/Components/Redux/Reducers/CounterReducer.jsx"
***************************************************************************************************
const CounterReducer = (state = null, action) => {

    return state;
}
export default CounterReducer
***************************************************************************************************

1.3) Create combineReducers to "src/Components/Redux/CombineStore.jsx"
***************************************************************************************************
import { combineReducers } from 'redux';

import counterReducer from './Reducers/CounterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
})

export default rootReducer
***************************************************************************************************

1.4) Create store to "src/main.jsx"
***************************************************************************************************
import { createStore } from 'redux' // # npm install redux. !!! T_T !!! deprecated : เลิกใช้แล้ว
import { Provider } from 'react-redux' // # npm install react-redux

import rootReducer from './Components/Redux/CombineStore.jsx'

const store = createStore(rootReducer) // !!! T_T !!! deprecated : เลิกใช้แล้ว

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
***************************************************************************************************
   
2) Crate action "Components\Redux\Action\CounterActions.jsx"   
***************************************************************************************************
// Action Types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SET_COUNT = 'SET_COUNT'

// Action Creators (Dispatch -> Reducer)
export const increment = ()=> ({
    type: INCREMENT,
});

export const decrement = ()=> ({
    type: DECREMENT,
});

export const setCount = (count) => ({
    type: SET_COUNT,
    payload: count, // set data via payload
});
***************************************************************************************************

3) Create store "Components\Redux\Reducers\CounterReducer.jsx"
***************************************************************************************************
// [Step 1]
import { INCREMENT, DECREMENT, SET_COUNT } from "../Actions/CounterActions";

// [Step 2] 
const initialState = {
    count: 0,
}

// [Step 3] : add initialState 
const CounterReducer = (state = initialState, action) => {

    // [Step 4]
    switch (action.type) {              // Action value
        case INCREMENT:               
            return {					// return data to component -> (view)
                ...state,               // spread operator (…) for retun object
                count: state.count + 1, // payload
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1, 
            };
        case SET_COUNT:
            return {
                ...state,
                count: action.payload, 
            };
        default:
            return state;
    }

}

export default CounterReducer
***************************************************************************************************

4) [Skip] Create combineReducers "Components\Redux\CombineStore.jsx"
***************************************************************************************************
import { combineReducers } from 'redux'

import CounterReducer from './Reducers/CounterReducer'

const rootReducer = combineReducers({
    counter: CounterReducer,
})

export default rootReducer
***************************************************************************************************

5) [Skip] Create Store Provider by edit "main.jsx"
***************************************************************************************************
import { createStore } from 'redux' // # npm install redux 
import { Provider } from 'react-redux' // # npm install react-redux

import rootReducer from './Components/Redux/CombineStore.jsx'

const store = createStore(rootReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
***************************************************************************************************

6) Create "Counter.jsx" component "Components\Redux\Pages\Counter.jsx"
***************************************************************************************************
// [Step 1]
#rafce

// [Step 2]
// Implement component as App.jsx

// ...
// Redux basic [Counter] demo
// import ReduxCounter from './Components/Redux/Pages/Counter'
// ...
// <ReduxCounter />
// ...

import React from 'react'

// [Step 3]
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

// [Step 4] Implement Action
import { increment, decrement, setCount } from '../Actions/CounterActions'

const Counter = () => {

    // [Step 5]
    const dispatch = useDispatch(); // Send data
    const [newCount, setNewCount] = useState(0); 

    // main -> App -> CombineStore -> rootReducer.counter
    const { counter } = useSelector(state => ({ ...state })); // Subscribe data

    // [Step 6]
    return (
        <div>
            <h2>Counter: {counter.count}</h2>
            <button onClick={() => dispatch(increment())} >Increment</button>
            <button onClick={() => dispatch(decrement())} >Decrement</button>
            <div>
                <input
                    trype="number"
                    value={newCount}
                    onChange={(e) => setNewCount(Number(e.target.value))}
                />
                <button onClick={() => dispatch(setCount(newCount))} >Set Count</button>
            </div>            
        </div>
    )
}

export default Counter
***************************************************************************************************
7) [Skip] Add component into "App.jsx"
// ...
// Redux basic [Counter] demo
// import ReduxCounter from './Components/Redux/Pages/Counter'
// ...
// <ReduxCounter />
// ...










###################################################################################################
[UserReducer]
###################################################################################################
- Create Web API from "mockapi.io"
  - Create "user" project
  - Create new resource
	- id			Object Id
	- createdAt		Faker.js		date.recent
	- name			Faker.js		name.fullName
	- avatar		Faker.js		image.avatar
	- phoneNumber	Faker.js		phone.number

***************************************************************************************************

1) Create page for demo
  - Components/Redux/Pages
    - UserList.jsx
	- UserEdit.jsx

1.1) Edit file "Components/Redux/Pages/UserList.jsx"
***************************************************************************************************
//# rafce

import React from 'react'

const UserEdit = () => {
  return (
    <div>UserEdit</div>
  )
}

export default UserEdit
***************************************************************************************************

1.2) Edit file "Components/Redux/Pages/UserEdit.jsx"
***************************************************************************************************
//# rafce

import React from 'react'

const UserEdit = () => {
  return (
    <div>UserEdit</div>
  )
}

export default UserEdit
***************************************************************************************************

2) Create router into file "main.jsx"
***************************************************************************************************
// [Step 1]
// React Router DOM for Redux components
import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom

// [Step 2] : Implement applyMiddleware
import { createStore, applyMiddleware } from 'redux' // # npm install redux 
import { Provider } from 'react-redux' // # npm install react-redux

// [Step 3]
import { thunk } from "redux-thunk";   // # npm install redux-thunk

import rootReducer from './Components/Redux/CombineStore.jsx'

// [Step 4]
import UserList from './Components/Redux/Pages/UserList.jsx'
import UserEdit from './Components/Redux/Pages/UserEdit.jsx'


// [Step 5]
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserList />,
  },
  {
    path: "/create",
    element: <UserEdit />,
  },
  {
    path: "/edit/:id",
    element: <UserEdit />,
  },
]);

// [Step 6] add applyMiddleware(thunk) parameter.
const store = createStore(rootReducer, applyMiddleware(thunk))

// [Step 7]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
***************************************************************************************************

3) Install redux : npm install redux react-redux
3.1 ) Edit file  "Components/Redux/Pages/UserList.jsx"

3.1.1) 
// [Step 1]
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' // npm install redux react-redux

3.1.2)
...
    // [Step 2]
    const users = [{
        id: 1,
        name: 'AppDev',
        email: 'appdev@gmail.com',
        phoneNumber: '0123456789',
    }]
...

3.1.3)
...
    // [Step 3]
    return (
        <div className="container mx-auto p-4">
            <h3 className="mb-4 text-lg font-semibold">User List</h3>
            {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between border-b py-2">
                    <div>
						<p>Id: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phoneNumber}</p>
                    </div>
                    <div>
                        <button
                            className="mr-2 rounded bg-red-500 px-3 py-1 text-white"
                            // onClick={() => dispatch(deleteUser(user.id))}
                        >
                            Delete
                        </button>
                        <Link to={`/edit/${user.id}`}>
                            <button className="rounded bg-blue-500 px-3 py-1 text-white">Edit</button>
                        </Link>
                    </div>
                    {/* <hr /> */}
                </div>
            ))}
        </div>
    )
...    

3.1.4) Test : http://localhost:5175/

***************************************************************************************************
4) Edit file "Components/Redux/Pages/UserEdit.jsx"
***************************************************************************************************
4.1.1) 
...
// [Step 1]
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
...

4.1.2) 
...
    // [Step 2]
    const { id } = useParams();

    // [Step 3]
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })
...

4.1.3) Edit view
...
    // [Step 4]
    return (
        <div className="container mx-auto p-4">
            <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Name"
                className="mb-2 w-full rounded border p-2"
            />
            <br />
            <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mb-2 w-full rounded border p-2"
            />
            <br />
            <input
                type="text"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mb-4 w-full rounded border p-2"
            />
            {/* {message && <div className={isError ? "text-red-500" : "text-green-500"}>{message}</div>} */}

            <br />
            <button
                onClick={handleSave}
                className="rounded bg-green-500 px-4 py-2 text-white">
                Save
            </button>
        </div>
    )
...

!!! Exception Error from view !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-- "ReferenceError: handleChange is not defined" 
-- "ReferenceError: handleSave is not defined"
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

4.1.4) Create event handler
...
    // [Step 1]
    // Event handler ----------------------------------------------------------------------------------
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    // [Step 2]
    const handleSave = async () => {
        console.log("Parameter Id : ", id)
        console.log("userData : ", userData)
    }
...

5) Create "userActions.jsx" to "Components/Redux/Actions/userActions.jsx"
***************************************************************************************************
// [Step 1]
export const ActionTypes = {
    FETCH_USERS: 'FETCH_USERS',
}

// [Step 2]
export const fetchUsers = () => ({
    type: ActionTypes.FETCH_USERS,
    payload: [
        {
            id: 1,
            name: 'AppDev_1',
            email: 'appdev_1@gmail.com',
            phoneNumber: '0123456789',
        },
        {
            id: 2,
            name: 'AppDev_2',
            email: 'appdev_2@gmail.com',
            phoneNumber: '0123456789',
        },
        {
            id: 3,
            name: 'AppDev_3',
            email: 'appdev_3@gmail.com',
            phoneNumber: '0123456789',
        },
    ]
});
***************************************************************************************************

6) Create "userReducer.jsx" to "Components/Redux/Reducers/userReducer.jsx"
***************************************************************************************************
// [Step 1]
import { ActionTypes } from "../Actions/userActions"

// [Step 3]
const initState = {
    users: [],        // List data => UserList
    currentUser: null // Edit mode => UserEdit
}

// [Step 2]
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
};

export default userReducer
***************************************************************************************************

7) Edit "CombineStore.jsx" to "Components/Redux/CombineStore.jsx"
***************************************************************************************************
import { combineReducers } from 'redux';

import counterReducer from './Reducers/CounterReducer';

// [Step 1]
import userReducer from './Reducers/userReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    
    // [Step 2]
    user: userReducer,
})

export default rootReducer
***************************************************************************************************

8) Edit "UserList.jsx" to "Components/Redux/Pages/UserList.jsx"
***************************************************************************************************
...
// [Step 1] 
import { fetchUsers } from '../Actions/userActions'
...
    // [Step 2] Comment below lines.
    // const users = [{
    //     id: 1,
    //     name: 'AppDev',
    //     email: 'appdev@gmail.com',
    //     phoneNumber: '0123456789',
    // }]
...	
    // [Step 3]
    const dispatch = useDispatch();

    // [Step 4]
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // [Step 5]
    // main -> App -> CombineStore.user -> rootReducer.users
    const users = useSelector((state) => state.user.users); // subscribe data
...	
***************************************************************************************************
!!! Explain code and process flow !!!



!!! End Basic State !!!



9) "userActions.jsx" to "Components/Redux/Actions/userActions.jsx"
***************************************************************************************************
// [Step 1]
import axios from "axios"

// [Step 2]
export const ActionTypes = {
    FETCH_USERS: 'FETCH_USERS',
    FETCH_USER: "FETCH_USER",
    CREATE_USER: "CREATE_USER",
    EDIT_USER: "EDIT_USER",
    DELETE_USER: "DELETE_USER",
}


// [Step 3]
const apiUrl = "https://669890d82069c438cd6f2242.mockapi.io/userInfo";

// [Step 4] !!! Explain code !!!
export const fetchUsers = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}`)
        dispatch({
            type: ActionTypes.FETCH_USERS,
            payload: response.data,
        })
    } catch (error) {
        dispatch({ type: ActionTypes.FETCH_USERS_ERROR })
    }
};

// [Step 5] 
export const fetchUser = (userId) => async (dispatch) => {
    const response = await axios.get(`${apiUrl}/${userId}`);
    dispatch({ type: ActionTypes.FETCH_USER, payload: response.data });
};

// [Step 6]
export const createUser = (user) => async (dispatch) => {
    try {
        const response = await axios.post(apiUrl, user);
        dispatch({ type: ActionTypes.CREATE_USER, payload: response.data });
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// [Step 7]
export const editUser = (user) => async (dispatch) => {
    try {
        const response = await axios.put(`${apiUrl}/${user.id}`, user);
        dispatch({ type: ActionTypes.EDIT_USER, payload: response.data });
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// [Step 8]
export const deleteUser = (userId) => async (dispatch) => {
    await axios.delete(`${apiUrl}/${userId}`);
    dispatch({ type: ActionTypes.DELETE_USER, payload: userId });
};

// export const fetchUsers = () => ({
//     type: ActionTypes.FETCH_USERS,
//     payload: [
//         {
//             id: 1,
//             name: 'AppDev_1',
//             email: 'appdev_1@gmail.com',
//             phoneNumber: '0123456789',
//         },
//         {
//             id: 2,
//             name: 'AppDev_2',
//             email: 'appdev_2@gmail.com',
//             phoneNumber: '0123456789',
//         },
//         {
//             id: 3,
//             name: 'AppDev_3',
//             email: 'appdev_3@gmail.com',
//             phoneNumber: '0123456789',
//         },
//     ]
// });

***************************************************************************************************

10) Edit "userReducer.jsx" to "Components/Redux/Reducers/userReducer.jsx"
***************************************************************************************************
import { ActionTypes } from "../Actions/userActions"

const initState = {
    users: [],        // List data => UserList
    currentUser: null // Edit mode => UserEdit
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }

        // [Step 1]
        case ActionTypes.FETCH_USER:
            return { ...state, 
                    currentUser: action.payload };
        case ActionTypes.CREATE_USER:
            return { ...state, 
                     users: [...state.users, action.payload] };
        case ActionTypes.EDIT_USER:
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)),
            };
        case ActionTypes.DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
            };
        default:
            return state
    }
}

export default userReducer
***************************************************************************************************

11) Edit "UserList.jsx" to "Components/Redux/Pages/UserList.jsx"
***************************************************************************************************
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' // npm install redux react-redux

// [Step 1] import deleteUser
import { fetchUsers, deleteUser } from '../Actions/userActions'

const UserList = () => {

    // const users = [{
    //     id: 1,
    //     name: 'AppDev',
    //     email: 'appdev@gmail.com',
    //     phoneNumber: '0123456789',
    // }]

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // main -> App -> CombineStore.user -> rootReducer.users
    const users = useSelector((state) => state.user.users); // subscribe data

    return (
        <div className="container mx-auto p-4">
            <h3 className="mb-4 text-lg font-semibold">User List</h3>
            {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between border-b py-2">
                    <div>
						<p>Id: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phoneNumber}</p>
                    </div>
                    <div>
                        <button
                            className="mr-2 rounded bg-red-500 px-3 py-1 text-white"

                            // [Step 2]
                            onClick={() => dispatch(deleteUser(user.id))}


                        >
                            Delete
                        </button>
                        <Link to={`/edit/${user.id}`}>
                            <button className="rounded bg-blue-500 px-3 py-1 text-white">Edit</button>
                        </Link>
                    </div>
                    {/* <hr /> */}
                </div>
            ))}
        </div>
    )
}

export default UserList
***************************************************************************************************

12) Edit file "Components/Redux/Pages/UserEdit.jsx"
***************************************************************************************************
import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

// [Step 1]
import { useDispatch, useSelector } from "react-redux";
import { createUser, editUser, fetchUser } from '../Actions/userActions'

const UserEdit = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })

    // [Step 2]
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    // [Step 3]
    const currentUser = useSelector((state) => state.user.currentUser);

    // [Step 4]
    const dispatch = useDispatch();

    // [Step 5]
    useEffect(() => {
        if (id) {     
            dispatch(fetchUser(id));
        }
    }, [id, dispatch]);

    // [Step 6]
    useEffect(() => {
        if (currentUser) { setUserData(currentUser); }
    }, [currentUser]);

    // Event handler ----------------------------------------------------------------------------------
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
     
    const handleSave = async () => {
        console.log("Parameter Id : ", id);
        console.log("userData : ", userData);

        // [Step 7]
        const result = userData.id
        ? await dispatch(editUser(userData))
        : await dispatch(createUser(userData));

        if (result.success) {
            setMessage("User saved successfully.");
            setIsError(false);
          } else {
            setMessage(result.message || "An error occurred.");
            setIsError(true);
          }
    }

    return (
        <div className="container mx-auto p-4">
            <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Name"
                className="mb-2 w-full rounded border p-2"
            />
            <br />
            <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mb-2 w-full rounded border p-2"
            />
            <br />
            <input
                type="text"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mb-4 w-full rounded border p-2"
            />

            //[Step 8]
            message && <div className={isError ? "text-red-500" : "text-green-500"}>{message}</div>

            <br />
            <button
                onClick={handleSave}
                className="rounded bg-green-500 px-4 py-2 text-white">
                Save
            </button>
        </div>
    )
}

export default UserEdit
***************************************************************************************************
