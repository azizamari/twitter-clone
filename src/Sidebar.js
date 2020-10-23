import React from 'react'
import "./Sidebar.css"
import  TwitterIcon from "@material-ui/icons/Twitter"
import SideBarOption from "./SideBarOption.js"
import HomeIcon from '@material-ui/icons/Home'; 
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon />

            <SideBarOption text="Home" Icon={HomeIcon} />
            <SideBarOption text="Explore" Icon={SearchIcon} />
            <SideBarOption text="Notifications" Icon={NotificationsNoneIcon} />
            <SideBarOption text="Messages" Icon={MailOutlineIcon} />
            <SideBarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
            <SideBarOption text="Lists" Icon={ListAltIcon} />
            <SideBarOption text="Profile" Icon={PermIdentityIcon} />
            <SideBarOption text="More" Icon={MoreHorizIcon} />

            {/* SideBarOption */}
            {/* SideBarOption */}
            {/* SideBarOption */}
            {/* SideBarOption */}
            {/* SideBarOption */}
            {/* SideBarOption */}
            
            {/* Button -> Tweet */}
        </div>
    )
}

export default Sidebar