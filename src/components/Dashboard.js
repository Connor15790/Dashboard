import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Dashboard() {
    const data = [
    {
        id: 1,
        name: 'User1',
        dataupload: `${50} `,
        datadownload: `${50} `,
        email: "user1@gmail.com",
        phone: 1649716987,
        age: 20
    },
    {
        id: 2,
        name: 'User2',
        dataupload: `${20} `,
        datadownload: `${70} `,
        email: "user2@gmail.com",
        phone: 5890720789,
        age: 23
    },
    {
        id: 3,
        name: 'User3',
        dataupload: `${20} `,
        datadownload: `${57} `,
        email: "user3@gmail.com",
        phone: 4147287408,
        age: 22
    },
    {
        id: 4,
        name: 'User4',
        dataupload: `${10} `,
        datadownload: `${80} `,
        email: "user4@gmail.com",
        phone: 2938927404,
        age: 20
    },
    {
        id: 5,
        name: 'User5',
        dataupload: `${40} `,
        datadownload: `${70} `,
        email: "user5@gmail.com",
        phone: 2580259002,
        age: 21
    },
    {
        id: 6,
        name: 'User6',
        dataupload: `${25} `,
        datadownload: `${90} `,
        email: "user6@gmail.com",
        phone: 9027048784,
        age: 20
    },
    {
        id: 7,
        name: 'User7',
        dataupload: `${45} `,
        datadownload: `${50} `,
        email: "user7@gmail.com",
        phone: 6473864719,
        age: 27
    },
];
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h2>MARKLYTICS DASHBOARD</h2>
            </div>

            <div className='main-cards'>
                <Link to={"/users"} className='card' style={{textDecoration: "none"}}>
                    <div className='card-inner'>
                        <h3>USERS</h3>
                        <FaUser  className='card_icon' />
                    </div>
                    <h1>{data.length}</h1>
                </Link>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CATEGORIES</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>CUSTOMERS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALERTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="dataupload" fill="#8884d8" />
                        <Bar dataKey="datadownload" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="dataupload" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="datadownload" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </main>
    )
}

export default Dashboard;