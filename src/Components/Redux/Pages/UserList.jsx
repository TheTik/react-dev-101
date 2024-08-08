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
                    {/* <hr /> */}
                </div>
            ))}
        </div>
    )
}

export default UserList