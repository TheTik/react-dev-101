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
