import React, { useState, useEffect } from 'react'
import "./CreateCommunity.css"
import SideNavbar from "../../components/SideNavbar/SideNavbar.jsx"
import axios from "axios"
import Cookies from "js-cookie"
import RefreshToken from '../../components/RefreshToken/RefreshToken'

const CreateCommunity = () => {

    const [currentUserProfileImg, setCurrentUserProfileImg] = useState();
	const [currentUsersUsername, setCurrentUsersUsername] = useState("");

    const [communityName, setCommunityName] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [communityStatus, setCommunityStatus] = useState("");
    const [communityHeaderImage, setCommunityHeaderImage] = useState(null)

    const currentBaseApiUrl = process.en.PRODUCTION_ENVIROMENT_URL


    const createNewCommunity = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("community_name", communityName)
        formData.append("header_image", communityHeaderImage)
        formData.append("description", shortDescription)
        formData.append("community_status", communityStatus)

        const url = `${currentBaseApiUrl}api/base/create_new_community/`

        const userAccessToken = Cookies.get("access_token")
		axios.defaults.headers.common['Authorization'] = `Bearer ${userAccessToken}`;
		const config = {
			headers: {
				"Authorization": `Bearer ${userAccessToken}`,
				"Content-Type": "multipart/form-data"
			}
		}

        axios.post(url, formData, config).then((response) => {
            console.log(response.data)
        })

    }


    useEffect(() => {
		getCurrentUser();
	}, [])


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
        <div className='main_create_community_outer_container'>
            <RefreshToken />
            <div className='container'>
                <div className='navbar_container'><SideNavbar /></div>

                <div className='content_container'>
                    <h2>Create new community here</h2>

                    <div className='form_container'>
                        <form className='actual_form' onSubmit={createNewCommunity}>
                            <div className='single_input'>
                                <label>Community name:</label>
                                <input type='text' placeholder='Please enter name for new community' onChange={(e) => setCommunityName(e.target.value)} />
                            </div>
                            <div className='single_input'>
                                <label>Community Description:</label>
                                <input type='text' placeholder='Enter a short description for your community for other users' onChange={(e) => setShortDescription(e.target.value)} />
                            </div>
                            <div className='single_input'>
                                <label>Community status:</label>
                                <input type='text' placeholder='Is this community public or private' onChange={(e) => setCommunityStatus(e.target.value)}/>
                            </div>
                            <div className='single_input'>
                                <label>Community Profile Image:</label>
                                <input type='file' onChange={(e) => setCommunityHeaderImage(e.target.files[0])} />
                            </div>
                            <div className='create_community_btn_container'>
                                <button type='submit' className='create_community_btn'>Create Community</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCommunity