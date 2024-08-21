1) Create folder and file at "src/Components/UserCRUDDemo/UserList.jsx"
2) Create folder and file at "src/Components/UserCRUDDemo/UserEdit.jsx"
3) # rafce UserList.jsx and UserEdit.jsx
4) Edit "main.jsx"  for create router.
***************************************************************************************************
import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom

import UserList from './Components/UserCRUDDemo/UserList.jsx'
import UserEdit from './Components/UserCRUDDemo/UserEdit.jsx'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
***************************************************************************************************
!!! ถ้าเจอ Error !!!
main.jsx:26 Uncaught TypeError: Cannot read properties of undefined (reading 'createRoot') at main.jsx:26:10

Edit file "main.jsx"
...
import ReactDOM from 'react-dom/client'
...

5) Edit file "UserList.jsx"
***************************************************************************************************

// [Step 1] Import useState and useEffect
import React, { useState, useEffect } from 'react'

// [Step 2]
import { Link } from "react-router-dom";

// [Step 3]
import axios from "axios"; // npm install axios

const UserList = () => {

    // [Step 4]
    const apiUrl = "https://669890d82069c438cd6f2242.mockapi.io/userInfo";

    // [Step 5]
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // [Step 6]
    const getUsers = async () => {
        // await axios.get(apiUrl).then((res) => { setUsers(res.data); });
        try {
            const response = await axios.get(apiUrl);
            setUsers(response.data);
            setIsLoading(false);
        } catch (error) { console.log('error', error); }
    }

    // [Step 7]
    useEffect(() => {
        getUsers();
    }, [])
    console.log(users);

    // [Step 9]
    const deleteUser = async(userId) => {
        try {
            setIsLoading(true);
            await axios.delete(`${apiUrl}/${userId}`);
            await getUsers();
            setIsLoading(false);
        } catch (error) { console.log('error', error); }
    }

    // [Step 8]
    return (
        <>
            { isLoading && (<div>Loading...</div>) }
            { !isLoading &&
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
                                    onClick={async () => await deleteUser(user.id)}
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
            }
        </>
    )
}

export default UserList


***************************************************************************************************
6) Edit file "UserEdit.jsx"
***************************************************************************************************

// [Step 1] Import useState and useEffect
import React, { useState, useEffect } from 'react'

// [Step 2]
import { useParams } from "react-router-dom";

// [Step 3]
import axios from "axios"; // npm install axios

const UserEdit = () => {

    // [Step 4]
    const apiUrl = "https://669890d82069c438cd6f2242.mockapi.io/userInfo";

    // [Step 5]
    const { id } = useParams();
    console.log(`Id : ${id}`);

    // [Step 6]
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    // [Step 10]
    const getUser = async (id) => {
        try {
            const response = await axios.get(`${apiUrl}/${id}`);
            setUser(response.data);
        } catch (error) { console.log('error', error); }
    }

    // [Step 11]
    useEffect(() => {
        if (typeof id !== 'undefined') getUser(id);
    }, [id]);

    // [Step 8]
    const handleChange = (e) => {
        //console.log([e.target.name],e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // [Step 9]
    const handleSave = async () => {
        //console.log(user);

        // [Step 12]
        if ((typeof id === 'undefined') || (id === null)) {
            try {
                const response = await axios.post(apiUrl, user);
                if (response.status === 201) alert("Data has been created successfully.");
            } catch (error) {
                alert("Error!!! data not created.");
            }
        } else {
            const response = await axios.put(`${apiUrl}/${user.id}`, user)
                .then((response) => {
                    //console.log(response);
                    if (response.status === 200) alert("Data has been saved successfully.");
                })
                .catch(function (error) {
                    if (error.response) {
                        //console.log(error.response.data);
                        //console.log(error.response.status);
                        //console.log(error.response.headers);
                        alert("Error!!! data not saved.");
                    }
                });
        }

    };
    
    // [Step 7]
    return (
        <div className="container mx-auto p-4">
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
                className="mb-2 w-full rounded border p-2"
            />
            <br />
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                className="mb-2 w-full rounded border p-2"
            />
            <br />
            <input
                type="text"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="mb-4 w-full rounded border p-2"
            />
            {/* {message && <div className={isError ? "text-red-500" : "text-green-500"}>{message}</div>} */}

            <br />
            <button onClick={handleSave} className="rounded bg-green-500 px-4 py-2 text-white">
                Save
            </button>
        </div>
    )
}

export default UserEdit

***************************************************************************************************