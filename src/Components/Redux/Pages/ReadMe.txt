###################################################################################################
[Counter]
###################################################################################################
Basic redux.
1) Create folders.   
   - Components\Redux\Reducers
   - Components\Redux\Actions
   - Components\Redux\Pages
   
2) Crate action "Components\Redux\Action\CounterActions.jsx"   
***************************************************************************************************
// Existing Action Types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SET_COUNT = 'SET_COUNT'

// Existing Action Creators (Dispatch -> Reducer)
export const increment = ()=> ({
    type: INCREMENT,
});

export const decrement = ()=> ({
    type: DECREMENT,
});

export const setCount = (count) => ({
    type: SET_COUNT,
    payload: count, // Test set data via payload
});
***************************************************************************************************

2) Create store "Components\Redux\Reducers\CounterReducer.jsx"
***************************************************************************************************
const initialState = {
    count: 0,
}

const CounterReducer = (state = initialState, action) => {
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

3) Create combineReducers "Components\Redux\CombineStore.jsx"
***************************************************************************************************
import { combineReducers } from 'redux'

import CounterReducer from './Reducers/CounterReducer'

const rootReducer = combineReducers({
    counter: CounterReducer,
})

export default rootReducer
***************************************************************************************************

4) Create Store Provider by edit "main.jsx"
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

5) Create "Counter.jsx" component "Components\Redux\Pages\Counter.jsx"
***************************************************************************************************
import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, setCount } from './Actions/CounterActions'

const Counter = () => {

    const dispatch = useDispatch();
    const [newCount, setNewCount] = useState(0);

    // main -> App -> CombineStore -> rootReducer.counter
    const { counter } = useSelector(state => ({ ...state })); // subscribe data

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
6) Add component into "App.jsx"










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
// React Router DOM for Redux components
import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom

import { createStore, applyMiddleware } from 'redux' // # npm install redux 
import { Provider } from 'react-redux' // # npm install react-redux
import { thunk } from "redux-thunk";   // # npm install redux-thunk

import rootReducer from './Components/Redux/CombineStore.jsx'

import UserList from './Components/Redux/Pages/UserList.jsx'
import UserEdit from './Components/Redux/Pages/UserEdit.jsx'

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

const store = createStore(rootReducer, applyMiddleware(thunk))

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
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux' // npm install redux react-redux

3.1.2)
...
    const users = [{
        id: 1,
        name: 'AppDev',
        email: 'appdev@gmail.com',
        phoneNumber: '0123456789',
    }]
...

3.1.3)
...
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
                    <hr />
                </div>
            ))}
        </div>
    )
...    

***************************************************************************************************
4) Edit file "Components/Redux/Pages/UserEdit.jsx"
***************************************************************************************************
4.1.1) 
...
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
...

4.1.2) 
...
    const { id } = useParams();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })
...

4.1.3) Edit view
...
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

4.1.4) Create event handler
...
    // Event handler ----------------------------------------------------------------------------------
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSave = async () => {
        console.log(userData)
        console.log(id)
    }
...

5) Create "userActions.jsx" to "Components/Redux/Actions/userActions.jsx"
***************************************************************************************************
export const ActionTypes = {
    FETCH_USERS: 'FETCH_USERS',
}

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
import userReducer from './Reducers/userReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
})

export default rootReducer
***************************************************************************************************

8) Edit "UserList.jsx" to "Components/Redux/Pages/UserList.jsx"
***************************************************************************************************
...
    // const users = [{
    //     id: 1,
    //     name: 'AppDev',
    //     email: 'appdev@gmail.com',
    //     phoneNumber: '0123456789',
    // }]
...	

...
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const users = useSelector((state) => state.user.users); // subscribe data
...	
***************************************************************************************************



!!! End Basic State !!!



9) "userActions.jsx" to "Components/Redux/Actions/userActions.jsx"
***************************************************************************************************
import axios from "axios"

export const ActionTypes = {
    FETCH_USERS: 'FETCH_USERS',
    FETCH_USER: "FETCH_USER",
    CREATE_USER: "CREATE_USER",
    EDIT_USER: "EDIT_USER",
    DELETE_USER: "DELETE_USER",
}

const apiUrl = "https://669890d82069c438cd6f2242.mockapi.io/userInfo";

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

export const fetchUser = (userId) => async (dispatch) => {
    const response = await axios.get(`${apiUrl}/${userId}`);
    dispatch({ type: ActionTypes.FETCH_USER, payload: response.data });
};

export const createUser = (user) => async (dispatch) => {
    try {
        const response = await axios.post(apiUrl, user);
        dispatch({ type: ActionTypes.CREATE_USER, payload: response.data });
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export const editUser = (user) => async (dispatch) => {
    try {
        const response = await axios.put(`${apiUrl}/${user.id}`, user);
        dispatch({ type: ActionTypes.EDIT_USER, payload: response.data });
        return { success: true };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

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

    // main -> App -> CombineStore -> rootReducer.user
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
                            onClick={() => dispatch(deleteUser(user.id))}
                        >
                            Delete
                        </button>
                        <Link to={`/edit/${user.id}`}>
                            <button className="rounded bg-blue-500 px-3 py-1 text-white">Edit</button>
                        </Link>
                    </div>
                    <hr />
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
import { useDispatch, useSelector } from "react-redux";
import { createUser, editUser, fetchUser } from '../Actions/userActions'

const UserEdit = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    })
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const currentUser = useSelector((state) => state.user.currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {     
            dispatch(fetchUser(id));
        }
    }, [id, dispatch]);

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
        console.log(userData)
        console.log(id)

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
            {message && <div className={isError ? "text-red-500" : "text-green-500"}>{message}</div>}

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






###################################################################################################
[UserReducer Toolkit] 
###################################################################################################
1) Create folder 
- Components/ReduxToolkit
- Components/ReduxToolkit/Pages

2) Create Slice to "Components/ReduxToolkit/userSlice.jsx"
***************************************************************************************************
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://669890d82069c438cd6f2242.mockapi.io/userInfo";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const fetchUser = createAsyncThunk("users/fetchUser", async (userId) => {
  const response = await axios.get(`${apiUrl}/${userId}`);
  return response.data;
});

export const createUser = createAsyncThunk("users/createUser", async (user) => {
  console.log(user);
  const response = await axios.post(apiUrl, user);
  return response.data;
});

export const editUser = createAsyncThunk("users/editUser", async (user) => {
  const response = await axios.put(`${apiUrl}/${user.id}`, user);  
  return response.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (userId) => {
  await axios.delete(`${apiUrl}/${userId}`);
  return userId;
});

// pending
// fulfilled
// rejected

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;
          if (action.type.includes("fetchUsers")) {
            state.users = action.payload;
          } else if (action.type.includes("fetchUser")) {
            state.currentUser = action.payload;
          } else if (action.type.includes("createUser")) {
            state.users.push(action.payload);
          } else if (action.type.includes("editUser")) {            
            const index = state.users.findIndex((user) => user.id === action.payload.id);        
            if (index !== -1) {
              state.users[index] = action.payload;              
            }
          } else if (action.type.includes("deleteUser")) {
            state.users = state.users.filter((user) => user.id !== action.payload);
          }
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        },
      );
  },
});

export default userSlice.reducer;

***************************************************************************************************

2) Create Store to "Components/ReduxToolkit/store.jsx"
***************************************************************************************************
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

const Store = configureStore({
    reducer: {
        user: userReducer,
    },
})

export default Store
***************************************************************************************************

3) Edit "main.jsx"
***************************************************************************************************
import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom
import { Provider } from 'react-redux' // # npm install react-redux

import UserList from './Components/ReduxToolkit/Pages/UserList.jsx'
import UserEdit from './Components/ReduxToolkit/Pages/UserEdit.jsx'

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

import store from './Components/ReduxToolkit/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
***************************************************************************************************

4) Create view
4.1) Copy files from 
   - "Components/Redux/Pages/UserList.jsx"
   - "Components/Redux/Pages/UserEdit.jsx"
 To
   - ""Components/ReduxToolkit/Pages/"
   
4.2) Edit file "Components/ReduxToolkit/Pages/UserList.jsx"
... 
import { fetchUsers, deleteUser } from '../userSlice'
...
   
4.3) Edit file "Components/ReduxToolkit/Pages/UserEdit.jsx"   
...
import { createUser, editUser, fetchUser } from '../userSlice'
...

... 
[From]
if (result.success) {
[To]
if (result.meta.requestStatus === 'fulfilled') {
...

   