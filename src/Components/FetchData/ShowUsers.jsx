/*
Fetch ดีกว่า XHR ยังไง
โดยพื้นฐานนั้น Fetch จะสามารถทำงานได้เทียบเท่า XHR แต่เพิ่มความสามารถบางอย่าง (คล้าย ๆ Ajax) ซึ่งจำเป็นในการพัฒนา Web Application ยุคใหม่เข้าไป ได้แก่

- ใช้ Cache API ได้
- สามารถตั้งค่าเกี่ยวกับ CORS ของการ Request ได้ (เช่น ใช้ cors หรือ ไม่ใช่ cors)
- Streaming responses ได้
- ยกเลิก request ได้
- รายงาน progress ของ request ได้

// Fetch GET
const url = 'XXX'
fetch(url)
     .then(data => { // arraw functin (data)
        console.waren(data);
        return data.json();
     })
    .then(data => {
        console.waren(data);
    })
    .catch(error => {
        console.error(error);
    });

// Fetch POST    
*/

import React from 'react' // React default
import { useState, useEffect } from 'react' // { useState, useEffect } is a method in 'react' component
import axios from "axios"; // npm install axios

export function HelloAppDev() // Split the components further and Export statement
{
    return <h1>Hello AppDev</h1>
}

const ShowUsers = () => {

    const [users, setUsers] = useState([]);

    async function getUsers() {
        //await fetch("http://localhost:8081/api/users")
        await fetch("/api/users")
            .then((res) => res.json())  // Current is native brower => paser JSON response into native JavaScript objects.
            .then((res) => {
                setUsers(res);
            });
    }

    // const getUsers = async () => {
    //     //await fetch("http://localhost:8081/api/users")
    //     await fetch("/api/users")
    //         .then((res) => res.json())  // Current is native brower => paser JSON response into native JavaScript objects.
    //         .then((res) => {
    //             setUsers(res);
    //         });
    // }

    // const getUsers = async () => {
    //     //await axios.get("http://localhost:8081/api/users")
    //     await axios.get("/api/users")
    //         .then((res) => {
    //             setUsers(res.data);
    //             //console.log(res);
    //         });
    // };

    useEffect(() => {
        getUsers();
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