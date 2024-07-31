# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# AppDev tutorial 101

# Install Node.js https://nodejs.org/en/download/package-manager
# Install VSCode Extension  
  - ES7+ React/Redux/React-Native snippets

Web service API : https://mockapi.io/  
Schema
Id            Object ID
createdAt     Faker.js        date.recent
name          Faker.js        name.fullName
avatar        Faker.js        image.avatar
email         Faker.js        internet.email
phoneNumber   Faker.js        phone.number

Packet install.
# npm install express
# npm install cors
# npm install axios
# npm install react-router-dom
# npm install redux 
# npm install react-redux
# npm install redux-thunk
# npm install @reduxjs/toolkit

# npm install jquery 
# npm install jquery datatables.net datatables.net-dt datatables.net-responsive-dt
# npm install --save-dev @types/jquery @types/datatables.net
# npm install -g typescript

//import DataTable from "./Components/DataTable";

- Create tsconfig.json : # tsc --init
tsconfig.json 
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

- Create file : tsconfig.node.json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

---------------------------------------------------------------------------------------------------------------------------------
Web API
---------------------------------------------------------------------------------------------------------------------------------
1) npm create vite@latest

> npx
> create-vite

/* 1.1) Enter Project name : [reate01] */
1.1) ? Project name: » vite-project

/* 1.2) Select a framework : [Reactnp] */
? Select a framework: » - Use arrow-keys. Return to submit.
   Vanilla
   Vue
>  React
   Preact
   Lit
   Svelte
   Solid
   Qwik
   Others

/* 1.3) Select a variant : [Javascript] */
? Select a variant: » - Use arrow-keys. Return to submit.
    TypeScript
    TypeScript + SWC
>   JavaScript
    JavaScript + SWC
    Remix ↗

Scaffolding project in D:\MyData\AppDev\MyGit\ReactDev\reate01...

Done. Now run:

  cd reate01
  npm install
  npm run dev    

1.4) cd [reate01] project folder and call visual studio code by command : code .
1.5) Open new teminal in visual studio code and install below packets.
npm install
npm run dev	 
  
/* Test */
npm run dev

> reate02@0.0.0 dev
> vite

Port 5173 is in use, trying another one...

  VITE v5.3.1  ready in 246 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help  
  
2) Crete Backend folder.
2.1) Install packet : npm install express  
2.2) Create server.js in Backend folder.

2.3) CORS : npm install cors
*************************************************

  //console.log(req.headers);
  //console.log(req.get('origin'));
  //console.log(req.headers.host);
  //console.log(req.get('host'));
  //console.log(req.headers.origin); 
  //console.log(req.header('Origin'));
  //console.log(req.socket.remoteAddress);

*************************************************
Enter below code :

import express from 'express'; // npm install express 
// import cors from 'cors'; // npm install cors

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

app.get('/api/users', /*cors(corsOptionsDelegate),*/ (req,res) => {  
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

const port = process.env.port || 8081;
app.listen(port, ()=> console.log('Listening on port ' + port + ' : http://localhost:'+ port +'/api/users'));

3) Create frontend : Components in frontend
3.1) Create [FetchData\ShowUsers.jsx] in Components folder.
# refc
*************************************************
import React from 'react'
import { useState, useEffect } from 'react'

const ShowUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/api/users")
            .then((res) => res.json())
            .then((res) => {
                setUsers(res);
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

***************************************************
The component will throw exception error about CORS
***************************************************

2.5) Set proxy for fix CORS issue.

2.5.1) Edit file : vite.config.js
*************************************************
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({  

// !!!
  server:{
    proxy:{
      '/api/users': 'http://localhost:8081'
    }
  },
// !!!

  plugins: [react()],
})
*************************************************

2.5.2) Edit file : src/Components/FetchData/ShowUser.jsx
*************************************************
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
*************************************************

2.5.3) Edit file : package.json
...
  "type": "module",
  "proxy":"http://localhost:8081",
...  

3) Deploy
3.1) # npm run build
3.2) Copy dist to Backend folder 
3.3) Edit file : server.js
*************************************************
import express from 'express';
import cors from 'cors'; // $ npm install cors

const app = express();

// !!!
app.use(express.static('dist'))
...
*************************************************