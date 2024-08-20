import React, { useState } from 'react'

async function postLogin(raw) {
    let response = null;
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(raw),
        };

        response = await fetch('/api/login', requestOptions);
        return response.json();
    } catch (error) {
        console.log('Error : ', error);
    }
}

const Login = () => {

    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("N/A");

    const handleChange = (e) => {
        //console.log([e.target.name],e.target.value);
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        console.log(login);

        // Check Loing authorize and set cookies authorize.
        const response = await postLogin(login);
        setMessage(response.message);
        
        // Set localStorage -------------------------------------------------------------------------------
        localStorage.setItem('local_storage_token', response.token);

        // Get localStorage
        const local_storage_token_val = localStorage.getItem("local_storage_token");
        console.log(`local_storage_token_val : ${local_storage_token_val}`);

        // Remove localStorage
        localStorage.removeItem('local_storage_token');
    };

    return (
        <div>
            <div>
                Email
                <input name="email"
                    value={login.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                Password
                <input name="password"
                    type="password"
                    value={login.password}
                    onChange={handleChange}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
            <div>
                System Message : {message}
            </div>
        </div>
    )
}

export default Login