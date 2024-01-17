import React, { useState, useEffect } from 'react'
import "./UserProfile.css"
import SideNavbar from "../../components/SideNavbar/SideNavbar.jsx"
import Image1 from "../../images/1 (1).jpg";
import { Link } from 'react-router-dom';
import SmallUserProfile from "../../images/1 (1).jpg";
import PostImage1 from "../../images/1 (3).jpg";
import axios from "axios"
import Cookies from "js-cookie"
import RefreshToken from '../../components/RefreshToken/RefreshToken'
import LikeBtn from "../../images/icons/like.png";
import CommentBtn from "../../images/icons/comment.png";
import ShareBtn from "../../images/icons/share.png";

const UserProfile = () => {

    const currentBaseApiUrl = process.en.PRODUCTION_ENVIROMENT_URL

    const [currentUserProfileImg, setCurrentUserProfileImg] = useState();
	const [currentUsersUsername, setCurrentUsersUsername] = useState("");
    const [currentUsersPosts, setCurrentUsersPosts] = useState([])

    useEffect(() => {
		getCurrentUser();
        getCurrentUsersPosts();
	}, [])

    const getCurrentUsersPosts = () => {

        const url = `${currentBaseApiUrl}api/base/get_current_users_posts/`;
		const userAccessToken = Cookies.get("access_token")
		axios.defaults.headers.common['Authorization'] = `Bearer ${userAccessToken}`;
		const config = {
			headers: {
				"Authorization": `Bearer ${userAccessToken}`,
				"Content-Type": "application/json"
			}
		}

        axios.get(url, config).then((response) => {
            console.log(response.data)
            setCurrentUsersPosts(response.data)
        })

    }

    const getCurrentUser = () => {
		const url = `${currentBaseApiUrl}api/authentication/get_current_user/`;
		const userAccessToken = Cookies.get("access_token")
		axios.defaults.headers.common['Authorization'] = `Bearer ${userAccessToken}`;
		const config = {
			headers: {
				"Authorization": `Bearer ${userAccessToken}`,
				"Content-Type": "application/json"
			}
		}
		axios.get(url, config).then((response) => {
			const { "current user profile image": profileImageUrl } = response.data;
			const { "current user user": usersUsername } = response.data;
			setCurrentUsersUsername(usersUsername);
			setCurrentUserProfileImg(profileImageUrl);
		})
	}


    return (
        <div className='outer_main_userprofile_container'>
            <RefreshToken />
            <div className='container'>
                <div className='navbar_container'>
                    <SideNavbar />
                </div>

                <div className='content_container'>
                    <div className='top_part_of_profile'>
                        <div className='top_part_leftside'>
                            <img src={currentUserProfileImg} alt='users_profile_img' className='users_profile_img' />
                        </div>
                        <div className='top_part_rightside'>
                            <h3>@{currentUsersUsername}</h3>
                            <p>
                                This is where the bio of the user is going to be once i add this to my backend as well
                                so make sure to do so the minute we go back to the backend
                            </p>
                            <button className='edit_profile_btn'>
                                <Link to="" className="actual_edit_btn_link">Edit Profile</Link>
                            </button>
                        </div>
                    </div>

                    <div className='profile_bottom_part'>
                        <h2>All your previous posts</h2>

                        <div className='previous_posts_container'>
                            {currentUsersPosts.map(single_post => (

                                <div className='single_post' key={single_post.id}>
                                    <div className='user_who_posted_container'>
                                        <Link to="" className='top_user_profile'>
                                            <div className='user_posted_leftside'>
                                                <img src={single_post.user_who_uploaded_profileimg} alt='user_who_posted' className='small_user_post_profile' />
                                            </div>
                                            <div className='user_posted_rightside'>
                                                <p>@{single_post.user_who_uploaded_username}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='post_image_container'>
                                        <img src={single_post.image_file} className='full_post_image' alt='actual_post_by_user' />
                                    </div>
                                    <div className='post_extras_container'>
                                        <img src={LikeBtn} className='post_like_btn' alt='like_btn' />
                                        <img src={CommentBtn} className='post_comment_btn' alt='comment_btn' />
                                        <img src={ShareBtn} className='post_share_btn' alt='share_btn' />
                                    </div>
                                    <div className='caption_container'>
                                        <p>
                                            {single_post.caption}
                                        </p>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile