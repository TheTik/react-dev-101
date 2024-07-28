import React from 'react'
import { useState, useEffect } from 'react'

const ShowUsers = () => {

    const [users, setusers] = useState([]);

    useEffect(() => {
        //fetch("http://localhost:8081/api/users")
        fetch("/api/users")        
            .then((res) => res.json())
            .then((res) => {
                setusers(res);
            });
    }, []);
    console.log(users);

    return (
        <div>
            <ul>
                {users.map(users => (
                    <li key={users.id}>{users.id}:{users.name}</li>
                )
                )}
            </ul>
        </div>
    )
}

export default ShowUsers