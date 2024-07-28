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