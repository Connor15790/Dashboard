import React, { useState } from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import data from '../data';
import "./Users.css"

const Users = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container' style={{width: "100%"}}>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <div className="table-container">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Upload</th>
                            <th>Download</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.dataupload}</td>
                                <td>{item.datadownload}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Users