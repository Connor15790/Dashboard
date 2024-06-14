import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    MARKLYTICS
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <li className='sidebar-list-item'>
                        <a href="/">
                            <BsGrid1X2Fill className='icon' /> Dashboard
                        </a>
                    </li>
                </Link>
                <Link to={"/users"} style={{ textDecoration: "none" }}>
                    <li className='sidebar-list-item'>
                        <a href="/">
                            <FaUser className='icon' /> Users
                        </a>
                    </li>
                </Link>
                <li className='sidebar-list-item'>
                    <a href="/">
                        <BsFillGrid3X3GapFill className='icon' /> Categories
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/">
                        <BsPeopleFill className='icon' /> Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/">
                        <BsListCheck className='icon' /> Inventory
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/">
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/">
                        <BsFillGearFill className='icon' /> Settings
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar