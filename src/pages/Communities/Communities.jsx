import React, { useState, useEffect } from 'react'
import "./Communities.css"
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import Image1 from "../../images/1 (4).jpg"
import { Link } from 'react-router-dom'
import axios from "axios"
import Cookies from "js-cookie"
import RefreshToken from '../../components/RefreshToken/RefreshToken'
import { useParams } from 'react-router-dom';

const Communities = () => {
    const { slug } = useParams();
    const [currentUserProfileImg, setCurrentUserProfileImg] = useState();
	const [currentUsersUsername, setCurrentUsersUsername] = useState("");
    const [allCommunities, setAllCommunities] = useState([])

    const currentBaseApiUrl = process.en.PRODUCTION_ENVIROMENT_URL

    useEffect(() => {
		getCurrentUser();
        getAllCommunities();
	}, [])

    const getAllCommunities = () => {
        const url = `${currentBaseApiUrl}api/base/get_all_communities_on_platform/`

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
            setAllCommunities(response.data)
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
        <div className='communities_outer_main_container'>
            <RefreshToken />
            <div className='container'>
                <div className='navbar_container'><SideNavbar /></div>

                <div className='content_container'>
                    <h2>All communities on the platform</h2>

                    <div className='community_search_container'>
                        <input type='text' placeholder='search for communities' />
                    </div>

                    <div className='communities_container'>
                        {allCommunities.map(single_community => (

                            <div className='single_community' key={single_community.id}>
                                <Link to={`/home/communities/${single_community.community_name}`} className='single_community_link_to_detail'>
                                    <div className='single_community_leftside'>
                                        <img src={single_community.header_image} alt='cummunity_heaader_img' className='community_img' />
                                    </div>
                                    <div className='single_community_leftside'>
                                        <h2>{single_community.community_name}</h2>
                                        <p>
                                            {single_community.description}
                                        </p>
                                        <p>Created by: <Link to="" className="user_profile_link"> @{single_community.user_who_created} </Link></p>
                                    </div>
                                </Link>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Communities