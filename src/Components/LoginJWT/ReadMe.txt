Inistall nodemon : nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
// # npm install --save-dev nodemon
// ...
// "scripts": {
//     ...
//     "backend-dev": "nodemon ./backend/server.js"
//   },
// ...
// run nodemon
// # npm run backend-dev

1) Crate a folder and file to "/src/Component/LoginJWT/Login.jsx"
2) Crate a folder and file to "/src/Component/LoginJWT/CheckAuthorize.jsx"
3) Crate Login.jsx and CheckAuthorize.jsx contant by pass rce + tab

4) Create router
//################################################################################################# 
// LoginJWT
//################################################################################################# 
import { RouterProvider, createBrowserRouter } from 'react-router-dom' //npm install react-router-dom

import Login from './Components/LoginJWT/Login'
import CheckAuthorize from './Components/LoginJWT/CheckAuthorize.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/CheckAuthorize",
    element: <CheckAuthorize />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
      <RouterProvider router={router} />
  //</React.StrictMode>
);

5) Create file ".env.local" at root directory.
***************************************************************************************************
SECRET_KEY=AppDev
***************************************************************************************************

6) Edit file "backend\server.js"

[Step 1]
...
import jwt from 'jsonwebtoken'; // npm install jsonwebtoken
import bcrypt from 'bcrypt'; // npm install bcrypt
import dotenv from 'dotenv'; // npm install dotenv --save
import cookieParser from 'cookie-parser'; // npm install cookie-parser
...

[Step 2]
...
// Require and configure dotenv, will load .env.development or .env.production
dotenv.config({ path: ['.env.local', '.env'] });

// Parse request body as JSON
app.use(express.json());

app.use(cookieParser());
...

[Step 3]
app.post("/api/login", async (req, res) => {
    //console.log("process.env.SECRET_KEY : ",process.env.SECRET_KEY);

    const { email, password } = req.body;
    //console.log(`Email : ${email}`);
    //console.log(`Password : ${password}`);

    const users = await getUsers();
    //console.log(users);

    const user = users.filter((x) => {
        if ((x.email === email) && (x.phoneNumber == password)) {
            return x;
        }
    });
    //console.log("user : ", user);

    if (user.length > 0) {
        //ทดสอบการเข้ารหัส
        const hashPassword = await bcrypt.hash(user[0].phoneNumber, 10); // สมมุติว่าเป็นข้อมูลที่ถูกเข้ารหัสฝั่ง Database
        // console.log(`hashPassword [DB] : ${hashPassword}`);

        const match = await bcrypt.compare(user[0].phoneNumber, hashPassword);

        if (!match) {
            await res.clearCookie("token");
            return res.status(400).send({ message: "Invalid email or password" });
        } else {
            const token = jwt.sign({ email, role: "admin" }, process.env.SECRET_KEY, { expiresIn: "1h" });
            //console.log(`token : ${token}`);

            res.cookie("token", token, {
                maxAge: 300000,
                secure: true,
                httpOnly: true,
                sameSite: "none",
            });

            return res.send({ message: "Login successful", token: token });
        }
    }else{
        await res.clearCookie("token");
    }

    return res.status(400).send({ message: "Invalid email or password" });

    // for test only...
    // return res.sendStatus(200);
});

...

[Step 4]
app.get('/api/authenticateToken', (req, res, next) => {
    let token = req.cookies.token;
    //console.log(`token : ${token}`);

    // Crack token
    const authHeader = req.headers['authorization'];
    // console.log(`authHeader : ${authHeader}`);
    if ((authHeader !== null) && (typeof authHeader !== 'undefined')) { token = authHeader.split(' ')[1]; }

    if ((token == null) || (typeof token === 'undefined')) return res.sendStatus(401); // if there isn't any token

    try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        //console.log("user : ", user);
        return res.send({ message: "Login successful", user: user });
        //next();
    } catch (error) {
        return res.sendStatus(403);
    }

    // for test only...
    // return res.sendStatus(200);
});

...


7) Edit file "src/LoginJWT/Login.jsx"
***************************************************************************************************
import React, { useState } from 'react'

// [Step 1]
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

    // [Step 2]
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    // [Step 3]
    const [message, setMessage] = useState("N/A");

    // [Step 5]
    const handleChange = (e) => {
        //console.log([e.target.name],e.target.value);
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    // [Step 6]
    const handleLogin = async () => {
        console.log(login);

        // [Step 7]
        // Check Loing authorize and set cookies authorize.
        const response = await postLogin(login);
        //console.log(response);
        setMessage(response.message);
        
        // [Step 8] อธิบายเรือง Cookie, Local Storage and Session Storage

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

    // [Step 4]
    return (
        <div>
            <div>
                Email
                <div>
                    <input name="email"
                        value={login.email}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                Password
                <div>
                    <input name="password"
                        type="password"
                        value={login.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button onClick={handleLogin}>Login</button>
            <div>
                System Message : {message}
            </div>
        </div>
    )
}

export default Login
***************************************************************************************************

8) Edit file "src/LoginJWT/CheckAuthorize.jsx"
***************************************************************************************************
import React, { useState } from 'react'

// [Step 1]
async function getAuthenticateToken() {
    let response = null;
    try {

        const requestOptions = {
            method: 'GET',
            redirect: "follow",
        };

        response = await fetch("/api/authenticateToken", requestOptions)
                         .then((response) =>  response.json());

        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

const CheckAuthorize = () => {

    // [Step 2]
    const [auth, setAuth] = useState({
        message: "N/A",
        user: { email: 'N/A', role: '' }
    });

    // [Step 4]
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

    // [Step 3]
    return (
        <div>
            <h4>Authorize Email : {auth.user.email}</h4>
            <h4>Message : {auth.message}</h4>
            <button onClick={handleLogin}>Check Login</button>
        </div>
    )
}

export default CheckAuthorize