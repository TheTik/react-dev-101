// 🔴 Effect firing twice in development only.
// Test ...
// 1) npm run build
// 2) npm run preview 
//    - Check error in console
// How to handle the effect firing twice in development.
// - Remove this command <React.StrictMode> in main.jsx

import React, { useState, useEffect } from 'react'

const Event = () => {

    const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // useEffect(() => {
    //     console.log(datas);
    // },[datas])

    function deleteData(id) {
        console.log(`Delete item Id : ${id}`);
    }

    return (
        <div>
            <ul>
                
                {/* {2+2/2} */}

                {
                datas.map(data => (
                        <li key={data}>{data}
                            {/* <button onClick={deleteData}>Delete</button> */}
                            {/* <button onClick={deleteData(data)}>Delete</button> */}
                            <button onClick={() => deleteData(data)}>Delete</button>
                        </li>
                        )
                )}
            </ul>
        </div>
    )
}

export default Event