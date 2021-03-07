import React from 'react';
import './Sidebar.css';
import title from './login_title.png'
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src = {title} alt = "logo"></img>
            <SidebarOption title="Home"/>
            <SidebarOption title="Search"/>
            <SidebarOption title="Library"/>
        </div>
    )
}

export default Sidebar
