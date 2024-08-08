import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"; // npm install axios

const UserList = () => {

    const apiUrl = "https://669890d82069c438cd6f2242.mockapi.io/userInfo";

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getUsers = async () => {
        // await axios.get(apiUrl).then((res) => { setUsers(res.data); });
        try {
            const response = await axios.get(apiUrl);
            setUsers(response.data);
            setIsLoading(false);
        } catch (error) { console.log('error', error); }
    }

    useEffect(() => {
        getUsers();
    }, [])

    const deleteUser = async(userId) => {
        try {
            setIsLoading(true);
            await axios.delete(`${apiUrl}/${userId}`);
            await getUsers();
            setIsLoading(false);
        } catch (error) { console.log('error', error); }
    }

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

                                // !!! Error ...
                                // ที่ก่อนหน้านี้ไม่พัง เพราะเราไม่ได้มีการเขียน parameter ทับใน function
                                // ทำให้เกิด Event Listener functon ตัวเดิมของ javascript ไปเลย
                                // = function มันเลยทำงานเสมอ เหมือนกำลัง observe event อยู่
                                // onClick={deleteUser(user.id)}                             
                                //ต้องเปลี่ยนเป็น  onClick={() => deleteUser(user.id)}
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