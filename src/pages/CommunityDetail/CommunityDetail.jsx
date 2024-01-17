import React, { useState, useEffect } from 'react'
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import "./CommunityDetail.css"
import SmallUserProfile from "../../images/1 (1).jpg";
import PostImage from "../../images/1 (2).jpg";
import { Link } from 'react-router-dom';
import axios from "axios"
import Cookies from "js-cookie"
import RefreshToken from '../../components/RefreshToken/RefreshToken'
import LikeBtn from "../../images/icons/like.png";
import CommentBtn from "../../images/icons/comment.png";
import ShareBtn from "../../images/icons/share.png";
import { useParams } from 'react-router-dom';

const CommunityDetail = () => {

    const { slug } = useParams();

    const [currentUserProfileImg, setCurrentUserProfileImg] = useState();
	const [currentUsersUsername, setCurrentUsersUsername] = useState("");
    const [currentCommunityPosts, setCurrentCommunityPosts] = useState([]);
    const [currentCommunityAdmin, setCurrentCommunityAdmin] = useState({});

    const currentBaseApiUrl = process.en.PRODUCTION_ENVIROMENT_URL


    useEffect(() => {
		getCurrentUser();
        getAllPostsInsideCommunity();
        getCurrentCommunityAdminDetails();
	}, [slug])

    const getCurrentCommunityAdminDetails = () => {
        const url = `${currentBaseApiUrl}api/base/get_admin_user_of_community/${slug}`

        const userAccessToken = Cookies.get("access_token")
		axios.defaults.headers.common['Authorization'] = `Bearer ${userAccessToken}`;
		const config = {
			headers: {
				"Authorization": `Bearer ${userAccessToken}`,
				"Content-Type": "multipart/form-data"
			}
		}

        axios.get(url, config).then((response) => {
            console.log(response.data)
            setCurrentCommunityAdmin(response.data)
        })
    }


    const getAllPostsInsideCommunity = () => {
        const url = `${currentBaseApiUrl}api/base/community_detail_page/${slug}`
        const userAccessToken = Cookies.get("access_token")
		axios.defaults.headers.common['Authorization'] = `Bearer ${userAccessToken}`;
		const config = {
			headers: {
				"Authorization": `Bearer ${userAccessToken}`,
				"Content-Type": "multipart/form-data"
			}
		}

        axios.get(url, config).then((response) => {
            console.log(response.data)
            setCurrentCommunityPosts(response.data)
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
        <div className='community_detail_outer_main_container'>
            <RefreshToken />
            <div className='container'>
                <div className='navbar_container'><SideNavbar /></div>

                <div className='content_container'>

                    <div className='posts_container'>
                        {currentCommunityPosts.length > 0 ? (
                            currentCommunityPosts.map(single_post => (
                                <div className='single_post' key={single_post.id}>
                                    <div className='user_who_posted_container'>
                                        <Link to="" className='top_user_profile'>
                                            <div className='user_posted_leftside'>
                                                <img src={single_post.user_who_uploaded_profileimg} alt='user_who_posted' className='small_user_post_profile' />
                                            </div>
                                            <div className='user_posted_rightside'>
                                                <p>@{single_post.user_who_posted_name}</p>
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
                            ))
                        ) : (
                            <h2>No posts inside this community yet</h2>
                        )}
                    </div>


                    <div className='current_users_container'>
                        <h2>Admin of community:</h2>

                        <div className='current_loggedin_user_container'>
                            <Link to="" className='current_loggedin_user_container_inside'>
                                    <div className='current_users_profileimg'>
                                        <img src={SmallUserProfile} alt='current_users_profiel' className='current_users_profile' />
                                    </div>
                                    <div className='current_users_name'>
                                        <p>@{currentCommunityAdmin.user_who_created_community}</p>
                                    </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CommunityDetail