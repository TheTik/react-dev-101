import express from 'express'; // npm install express 
import cors from 'cors'; // npm install cors
import jwt from 'jsonwebtoken'; // npm install jsonwebtoken
import bcrypt from 'bcrypt'; // npm install bcrypt : Hash Function
import dotenv from 'dotenv'; // npm install dotenv --save
import cookieParser from 'cookie-parser'; // npm install cookie-parser


// # npm install --save-dev nodemon 
// or
// # npm install nodemon -D 
// ...
// "scripts": {
//     ...
//     "backend-dev": "nodemon ./backend/server.js"
//   },
// ...
// run nodemon
// # npm run backend-dev
// # npx nodemon .\server.j

const app = express();

// // add cors middleware 
// var allowlist = ['http://example1.com', 'http://example2.com','localhost:8081', 'localhost:5174'];
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   var origin = req.headers.host;
//   if (allowlist.indexOf(origin) !== -1) {
//     corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
//     callback(null, corsOptions);    
//   } else {
//     corsOptions = { origin: false }; // disable CORS for this request
//     callback(new Error('Not allowed by CORS')); // callback expects
//   }
// }
// app.use(cors(corsOptionsDelegate));

// Require and configure dotenv, will load .env.development or .env.production
dotenv.config({ path: ['.env.local', '.env'] });

// Parse request body as JSON
app.use(express.json());

app.use(cookieParser());

// For deploy...
app.use(express.static('dist'));




async function getUsers() {
    var response = [];
    try {
        response = await fetch("https://669890d82069c438cd6f2242.mockapi.io/userInfo");
        if (!response.ok) {
            throw new Error('Cannot fetch users data.');
        }
        return response.json();
    } catch (error) {
        console.log('Error : ', error);
    }
}

app.get('/api/users', /*cors(corsOptionsDelegate),*/(req, res) => {
    res.send([
        {
            "createdAt": "2024-07-17T13:02:27.813Z",
            "name": "Rosie Wolf",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/757.jpg",
            "email": "Devan37@yahoo.com",
            "phoneNumber": "1-716-531-3751 x04740",
            "id": "1"
        },
        {
            "createdAt": "2024-07-17T18:00:56.963Z",
            "name": "Miss Saul Marvin",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/303.jpg",
            "email": "Abbey_Pfannerstill85@hotmail.com",
            "phoneNumber": "523.779.8668 x03272",
            "id": "2"
        },
        {
            "createdAt": "2024-07-17T15:11:04.206Z",
            "name": "Katrina Kilback",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/747.jpg",
            "email": "Alexander59@yahoo.com",
            "phoneNumber": "369-262-0673 x1869",
            "id": "3"
        },
        {
            "createdAt": "2024-07-17T16:17:02.184Z",
            "name": "Lynn Beier PhD",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/600.jpg",
            "email": "Mervin82@gmail.com",
            "phoneNumber": "(585) 654-1458 x76328",
            "id": "4"
        },
        {
            "createdAt": "2024-07-17T16:06:24.287Z",
            "name": "Billie Wiza",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/892.jpg",
            "email": "Holden_Langosh@gmail.com",
            "phoneNumber": "633-600-6320 x8610",
            "id": "5"
        },
        {
            "createdAt": "2024-07-17T08:44:56.214Z",
            "name": "Marguerite O'Kon IV",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/799.jpg",
            "email": "Anibal77@hotmail.com",
            "phoneNumber": "333.433.5451 x415",
            "id": "6"
        },
        {
            "createdAt": "2024-07-17T20:00:17.255Z",
            "name": "Ricardo Satterfield",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1247.jpg",
            "email": "Keyon.Berge@hotmail.com",
            "phoneNumber": "(408) 816-9442 x51387",
            "id": "7"
        },
        {
            "createdAt": "2024-07-17T17:38:10.292Z",
            "name": "Nettie Wilderman IV",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1181.jpg",
            "email": "King68@hotmail.com",
            "phoneNumber": "606-420-0541 x95814",
            "id": "8"
        },
        {
            "createdAt": "2024-07-17T07:57:54.206Z",
            "name": "Mr. Lola Monahan",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/760.jpg",
            "email": "Libbie66@yahoo.com",
            "phoneNumber": "965.781.7702 x30489",
            "id": "16"
        },
        {
            "createdAt": "2024-07-17T10:59:19.818Z",
            "name": "Bridget Rowe",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1134.jpg",
            "email": "Kiara_Ziemann60@hotmail.com",
            "phoneNumber": "1-965-215-0985 x334",
            "id": "9"
        },
        {
            "createdAt": "2024-07-17T09:27:39.178Z",
            "name": "Miss Vera Jast",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/253.jpg",
            "email": "Nona.Durgan63@yahoo.com",
            "phoneNumber": "1-357-302-2457 x92976",
            "id": "10"
        },
        {
            "createdAt": "2024-07-17T14:37:36.135Z",
            "name": "Nathaniel Jones",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/855.jpg",
            "email": "Paula74@gmail.com",
            "phoneNumber": "578.990.8469",
            "id": "11"
        },
        {
            "createdAt": "2024-07-17T08:24:24.896Z",
            "name": "Michelle Wilderman PhD",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/914.jpg",
            "email": "Lon32@gmail.com",
            "phoneNumber": "505.890.0559 x86188",
            "id": "12"
        },
        {
            "createdAt": "2024-07-17T12:41:19.274Z",
            "name": "Ms. Daryl Collins",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1229.jpg",
            "email": "Gillian_Rempel51@gmail.com",
            "phoneNumber": "814.812.5690 x1925",
            "id": "13"
        },
        {
            "createdAt": "2024-07-17T19:37:51.049Z",
            "name": "Lorene Mohr",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/94.jpg",
            "email": "Lyric.Thiel@yahoo.com",
            "phoneNumber": "(550) 904-5652 x7262",
            "id": "14"
        },
        {
            "createdAt": "2024-07-17T21:17:19.385Z",
            "name": "Judy Rogahn",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/533.jpg",
            "email": "Kallie_Walsh7@yahoo.com",
            "phoneNumber": "(375) 216-0017 x770",
            "id": "15"
        },
    ]);
});



app.post("/api/login", async (req, res) => {
    //console.log("process.env.SECRET_KEY : ",process.env.SECRET_KEY);

    const { email, password } = req.body;
    // console.log(`Email : ${email}`);
    // console.log(`Password : ${password}`);

    const users = await getUsers();
    const user = users.filter((x) => {
        if ((x.email === email) && (x.phoneNumber == password)) {
            return x;
        }
    });
    //console.log("user : ", user);

    /*
    Authentication และ Authorization 2 ตัวนี้เหมือนจะคล้ายๆกัน แต่มีความหมายต่างกันสิ้นเชิง
    Authentication (การรับรองความถูกต้อง) คือกระบวนการในการยืนยันตัวตนของผู้ใช้งานหรือกระบวนการก่อนที่จะอนุญาต
    ให้เข้าถึงระบบหรือ Resource ที่ได้รับการป้องกัน นั่นคือ กระบวนการรับรองความถูกต้อง เป็นการตรวจสอบว่าผู้ใช้งานคนนั้นเป็นคนที่อ้างว่าเป็นจริงหรือไม่ 
    โดยระบบจะขอข้อมูลที่เป็นความลับจากผู้ใช้งาน เช่น รหัสผ่าน คำตอบจากคำถามรักษาความปลอดภัย ข้อมูล Biographic หรือรหัสผ่านชั่วคราว เพื่อใช้ในการพิสูจน์ตัวตน

    Authorization (การอนุญาต) หลังจากที่ผู้ใช้งานผ่านการรับรองความถูกต้อง (Authentication) มาแล้ว ขั้นตอนต่อไปคือการอนุญาต 
    ซึ่งเป็นกระบวนการในการกำหนดสิทธิ์ให้กับผู้ใช้งานที่ผ่านการรับรองความถูกต้องแล้วว่าสามารถเข้าถึง Resource หรือข้อมูลใดได้บ้าง 
    การอนุญาตจะควบคุมว่าผู้ใช้งานมีสิทธิ์ในการดำเนินการอะไรกับ Resource นั้นๆได้บ้าง เช่น อ่าน เขียน แก้ไข หรือลบ เป็นต้น
    */

    if (user.length > 0) {
        // Hash Function คือ Algorithm ทางคณิตศาสตร์ สำหรับนำมาใช้ในการคำนวณเพื่อหาสิ่งที่เรียกว่า 
        // อัตลักษณ์หรือเอกลักษณ์ (Fingerprint) ของข้อมูลที่เราต้องการ
        const hashPassword = await bcrypt.hash(user[0].phoneNumber, 10); // สมมุติว่าเป็นข้อมูลที่ถูกเข้ารหัสฝั่ง Database
        // console.log(`hashPassword [DB] : ${hashPassword}`);

        const match = await bcrypt.compare(user[0].phoneNumber, hashPassword);
        if (!match) {
            await res.clearCookie("token");
            return res.status(400).send({ message: "Invalid email or password" });
        } else {
            const token = jwt.sign({ email, role: "admin" }, process.env.SECRET_KEY, { expiresIn: "1h" });
            //console.log(token);

            res.cookie("token", token, {
                maxAge: 300000,
                secure: true,
                httpOnly: true,
                sameSite: "none",
            });

            return res.send({ message: "Login successful", token: token });
        }
    } else {
        await res.clearCookie("token");
    }

    return res.status(400).send({ message: "Invalid email or password" });
});

app.get('/api/authenticateToken', (req, res, next) => {

    let token = req.cookies.token;
    //console.log(`token : ${token}`);

    // Crack token
    const authHeader = req.headers['authorization'];
    //console.log(`authHeader : ${authHeader}`); 
    if ((authHeader !== null) && (typeof authHeader !== 'undefined')) { token = authHeader.split(' ')[1]; }
    
    if ((token == null) || (typeof token === 'undefined')) return res.sendStatus(401); // if there isn't any token

    try {
        const user = jwt.verify(token, process.env.SECRET_KEY);
        req.user = user;
        console.log("user : ", user);
        return res.send({ message: "Login successful", user: user });
        //next();
    } catch (error) {
        return res.sendStatus(403);
    }
});

const port = process.env.port || 8081;
app.listen(port, () => console.log('Listening on port ' + port + ' : http://localhost:' + port + '/api/users'));