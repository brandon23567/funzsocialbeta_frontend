import React from 'react'
import "./SideNavbar.css"
import { Link } from "react-router-dom"
import HomeIcon from "../../images/icons/home(1).png";
import UploadPostIcon from "../../images/icons/cloud-computing.png";
import postOfDayIcon from "../../images/icons/new-post.png";
import CommunitiesIcon from "../../images/icons/crowd-of-users.png";
import CreateCommunityIcon from "../../images/icons/add.png";
import UserProfileIcon from "../../images/icons/profile-user.png"

const SideNavbar = () => {
    return (
        <div className='side_navbar_main_outer_container'>
            <div className='container'>
                <div className='logo_container'>
                    <h2>Socialz</h2>
                </div>

                <ul className='navbar_links_container'>
                    <li>
                        <Link to="/home" className='navbar_link'>
                            <img src={HomeIcon} alt='icon img' className='icon_image' />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home/upload" className='navbar_link'>
                            <img src={UploadPostIcon} alt='icon img' className='icon_image' />
                            <p>Upload</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="" className='navbar_link'>
                            <img src={postOfDayIcon} alt='icon img' className='icon_image' />
                            <p>Post of the day</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home/communities" className='navbar_link'>
                            <img src={CommunitiesIcon} alt='icon img' className='icon_image' />
                            <p>Communities</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home/create_community" className='navbar_link'>
                            <img src={CreateCommunityIcon} alt='icon img' className='icon_image' />
                            <p>Create Community</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home/user_profile/user1" className='navbar_link'>
                            <img src={UserProfileIcon} alt='icon img' className='icon_image' />
                            <p>Profile</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNavbar