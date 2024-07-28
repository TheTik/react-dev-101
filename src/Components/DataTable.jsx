import React from 'react'
import { useState, useEffect, useRef } from "react";

import ReactDataTables from  "../ReactDataTables";
import "datatables.net-dt/css/dataTables.dataTables.css";

const data = [
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$171,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "3",
        name: "AAA",
        position: "AAA",
        salary: "$172,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "4",
        name: "BBB",
        position: "BBB",
        salary: "$173,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "5",
        name: "CCC",
        position: "CCC",
        salary: "$174,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "6",
        name: "DDD",
        position: "DDD",
        salary: "$175,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "7",
        name: "EEE",
        position: "EEE",
        salary: "$176,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "8",
        name: "FFF",
        position: "FFF",
        salary: "$177,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "9",
        name: "GGG",
        position: "GGG",
        salary: "$178,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "10",
        name: "HHH",
        position: "HHH",
        salary: "$179,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "11",
        name: "III",
        position: "III",
        salary: "$180,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "12",
        name: "JJJ",
        position: "JJJ",
        salary: "$181,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "13",
        name: "KKK",
        position: "KKK",
        salary: "$182,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "14",
        name: "LLL",
        position: "LLL",
        salary: "$183,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "15",
        name: "MMM",
        position: "MMM",
        salary: "$184,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
];

const columns = [
    { data: "name", title: "Name", sortable: true, },
    { data: "position", title: "Position", sortable: true, },
    { data: "salary", title: "Salary", sortable: true, },
    { data: "start_date", title: "Start Date", sortable: true, },
    { data: "office", title: "Office", sortable: true, },
];

const pageLength = 10;
const lengthMenu = [[10, 25, 50, 100, 500], [10, 25, 50, 100, 500]];

const processing = false;
const serverSide = false;

const EmployeeTable = () => {
    return <ReactDataTables data={data}
        columns={columns}
        pageLength={pageLength}
        lengthMenu={lengthMenu}
        processing={processing}
        serverSide={serverSide}
    />;
};

const DataTable = () => {

    const [data, setData] = useState(null);
    const [posts, setPosts] = useState([]);


    //useEffect(() => {

    //fetch('http://localhost/WMS.TYM.CUST/WebAPI/Debug/GetTestData',
    /*
    fetch('/WebAPI/Debug/GetTestData',
      {
        method: 'POST',
        headers: {'Content-Type':'application/json', 'charset':'UTF-8'},
        body: {
                //'URL': 'http://localhost/WMS.TYM.CUST/WebAPI/Debug/GetTestData',
                //'JSONString': JSON.stringify({
                                              'Id': 0,
                                              'TextSearch': '',
                                              'Skip': 0,
                                              'Take': 10
                //                            })
        }
      }
    )
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error(error));
    */

    //}, []);

    useEffect(() => {
        fetch("/users")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);
    console.log(data);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/")
            .then((res) => res.json())
            .then((res) => {
                setPosts(res);
            });
    }, []);
    console.log(posts);

    return (
        <>
            <EmployeeTable />
        </>
    )
}

export default DataTable