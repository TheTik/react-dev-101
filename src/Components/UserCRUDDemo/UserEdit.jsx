import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"; // npm install axios

const UserEdit = () => {

    const apiUrl = "https://669890d82069c438cd6f2242.mockapi.io/userInfo";
    const { id } = useParams();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });

    const getUser = async (id) => {
        try {
            const response = await axios.get(`${apiUrl}/${id}`);
            setUser(response.data);
        } catch (error) { console.log('error', error); }
    }

    useEffect(() => {
        getUser(id);
    }, [id]);

    const handleChange = (e) => {
        //console.log([e.target.name],e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        //console.log(user);
        const response = await axios.put(`${apiUrl}/${user.id}`, user)
            .then((response) => {
                //console.log(response);
                if (response.status === 200) alert("Data has been saved successfully.");
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    alert("Error!!! data not saved.");
                }
            });
    };

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