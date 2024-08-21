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

        // Cookie
        // เป็นข้อมูลขนาดเล็กที่เก็บอยู่บนเว็บเบราว์เซอร์ของผู้ใช้
        // อายุการใช้งาน: สามารถกำหนดระยะเวลาการหมดอายุได้
        // ขนาด: มีขนาดจำกัด (ประมาณ 4KB ต่อ cookie)
        // สามารถส่งผ่าน HTTP Request ไปยังเซิร์ฟเวอร์ได้
                
        // Local Storage
        // มาพร้อมกับ HTML5
        // เก็บข้อมูลขนาดใหญ่ได้ โดยไม่มีวันหมดอายุ และข้อมูลจะคงอยู่แม้เบราว์เซอร์ถูกปิด
        // อายุการใช้งาน: ไม่มีวันหมดอายุจนกว่าข้อมูลจะถูกลบไป
        // ขนาด: ถูกจำกัดโดยเบราว์เซอร์ โดยทั่วไปประมาณ 5–10MB
        // Set/Get localStorage ---------------------------------------------------------------------------
        localStorage.setItem('local_storage_token', response.token);

        // Get localStorage
        const local_storage_token_val = localStorage.getItem('local_storage_token');
        console.log(`local_storage_token_val : ${local_storage_token_val}`);

        // Remove localStorage
        localStorage.removeItem('local_storage_token');

        // Clear all localStorage
        // localStorage.clear();
        
        // Session Storage
        // มาพร้อมกับ HTML5
        // เหมือนกับ Local Storage แต่ข้อมูลจะถูกลบเมื่อปิดหน้าต่างเบราว์เซอร์
        // อายุการใช้งาน: คงอยู่เฉพาะระหว่างเซสชันเท่านั้น (แท็บหรือหน้าต่างปัจจุบัน)
        // ขนาด: ถูกจำกัดโดยเบราว์เซอร์, แต่โดยทั่วไปจะเป็น 5–10MB เช่นเดียวกับ Local Storage        
        // Set/Get sessionStorage -------------------------------------------------------------------------
        sessionStorage.setItem('session_storage_token', response.token);

        // Get sessionStorage
        const session_storage_token_val = sessionStorage.getItem('session_storage_token');
        console.log(`session_storage_token_val : ${session_storage_token_val}`);

        // Remove sessionStorage
        sessionStorage.removeItem('session_storage_token');

        // Clear all sessionStorage
        // sessionStorage.clear();

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