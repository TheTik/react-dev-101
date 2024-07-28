import React, { useState } from 'react'

const GetFormData = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    })

    const handleChange = (e) => {
        //console.log([e.target.name],e.target.value);
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handdleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
    };

    return (
        <>
            <h1>Form Demo</h1>
            <form onSubmit={handdleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="mb-2 w-full rounded border p-2"
                />
                <br/>
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="mb-2 w-full rounded border p-2"
                />
                <br/>
                <input
                    type="text"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="mb-4 w-full rounded border p-2"
                />
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default GetFormData