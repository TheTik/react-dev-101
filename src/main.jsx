import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

//################################################################################################# 
// Default demo
//################################################################################################# 
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

//################################################################################################# 
// React Router DOM for UserCRUDDemo components
//################################################################################################# 
// import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom

// import UserList from './Components/UserCRUDDemo/UserList.jsx'
// import UserEdit from './Components/UserCRUDDemo/UserEdit.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UserList />,
//   },
//   {
//     path: "/create",
//     element: <UserEdit />,
//   },
//   {
//     path: "/edit/:id",
//     element: <UserEdit />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <React.StrictMode>
//     <RouterProvider router={router} />
//   // </React.StrictMode>,
// )
//################################################################################################# 

//################################################################################################# 
// React Redux [Counter]
//################################################################################################# 
// import { createStore } from 'redux' // # npm install redux 
// import { Provider } from 'react-redux' // # npm install react-redux

// import rootReducer from './Components/Redux/CombineStore.jsx'

// const store = createStore(rootReducer)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>  
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// )
//################################################################################################# 

//################################################################################################# 
// React Redux [UserReducer]
//################################################################################################# 
// import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom

// import { createStore, applyMiddleware } from 'redux' // # npm install redux 
// import { Provider } from 'react-redux' // # npm install react-redux
// import { thunk } from "redux-thunk";   // # npm install redux-thunk

// import rootReducer from './Components/Redux/CombineStore.jsx'

// import UserList from './Components/Redux/Pages/UserList.jsx'
// import UserEdit from './Components/Redux/Pages/UserEdit.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UserList />,
//   },
//   {
//     path: "/create",
//     element: <UserEdit />,
//   },
//   {
//     path: "/edit/:id",
//     element: <UserEdit />,
//   },
// ]);

// const store = createStore(rootReducer, applyMiddleware(thunk))

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>,
// )
//################################################################################################# 

//################################################################################################# 
// React Redux Toolkit [UserReducer]
//################################################################################################# 
// import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom
// import { Provider } from 'react-redux' // # npm install react-redux

// import UserList from './Components/ReduxToolkit/Pages/UserList.jsx'
// import UserEdit from './Components/ReduxToolkit/Pages/UserEdit.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <UserList />,
//   },
//   {
//     path: "/create",
//     element: <UserEdit />,
//   },
//   {
//     path: "/edit/:id",
//     element: <UserEdit />,
//   },
// ]);

// import store from './Components/ReduxToolkit/Store.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>,
// )
//################################################################################################# 

//################################################################################################# 
// ACE HTML Template
//################################################################################################# 
// import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom
// import AppDevPatent from './Components/HTMLTemplate/AppDevPatent/Index.jsx'

// import Default from './Components/HTMLTemplate/Template/Default.jsx'

// const router = createBrowserRouter([
//   {
//       path: "/",
//       element: <App />,
//       children: [
//                   {
//                       path: "/",
//                       element: <Default />
//                   },    
//                   {
//                     path: "/AppDevPatent",
//                     element: <AppDevPatent />
//                 },                      
//       ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <RouterProvider router={router} />
//   </React.StrictMode>
// );

