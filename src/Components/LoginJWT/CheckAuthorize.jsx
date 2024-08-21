import React, { useState } from 'react'

async function getAuthenticateToken() {
    let response = null;
    try {

        const requestOptions = {
            method: 'GET',
            redirect: "follow",
        };

        response = await fetch("/api/authenticateToken", requestOptions)
                         .then((response) => response.json());

        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

const CheckAuthorize = () => {

    const [auth, setAuth] = useState({
        message: "N/A",
        user: { email: 'N/A', role: '' }
    });

    const handleLogin = async () => {
        try {
            const result = await getAuthenticateToken();
            setAuth(result);
        } catch (error) {
            var errorObj = {
                message: error.message,
                user: { email: 'N/A', role: '' }
            };
            setAuth(errorObj);
        }
    };

    return (
        <div>
            <h4>Authorize Email : {auth.user.email}</h4>
            <h4>Message : {auth.message}</h4>
            <button onClick={handleLogin}>Check Login</button>
        </div>
    )
}

export default CheckAuthorize