import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar, IconButton } from "@material-ui/core";
import ChatIcon from  "@material-ui/icons/Chat";
import MoreVertIcon from  "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <h1>I am the sidebar</h1> */}
            <div className="sidebar__header">                        
            <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHCavzB1hhOSg/profile-displayphoto-shrink_100_100/0?e=1605139200&v=beta&t=nqJfs9bNdjs0T8U4vf-g_2wKhm2FBTI7CqyPEA81Eig"/>
                <div className="sidebar__headerRight">
                    {/* To make the icon a button, we need to import the IconButton UI too */}
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    
                </div>   
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start New Chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    )
}

export default Sidebar
