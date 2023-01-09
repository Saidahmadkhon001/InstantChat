import React from 'react';
import Navbar from './Navbar';
import Search from './Search'
import Chats from './Chats'
import AvatarImage from "../img/man.jpg";

const Sidebar = () => {
    return (
        <div className='sideBar'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar;