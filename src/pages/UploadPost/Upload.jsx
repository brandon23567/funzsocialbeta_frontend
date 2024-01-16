import React, { useState, useEffect } from 'react'
import "./Upload.css"
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import axios from "axios"
import Cookies from "js-cookie"
import RefreshToken from '../../components/RefreshToken/RefreshToken'

const Upload = () => {

    const [currentUserProfileImg, setCurrentUserProfileImg] = useState();
	const [currentUsersUsername, setCurrentUsersUsername] = useState("");

    const [imageCaption, setImageCaption] = useState("");
    const [imageFile, setImageFile] = useState(null)

    useEffect(() => {
		getCurrentUser();
	}, [])

    const uploadNewImage = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("caption", imageCaption)
        formData.append("image_file", imageFile)

        const url = "http://localhost:8000/api/base/upload_new_image_post/"
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


    const getCurrentUser = () => {
		const url = "http://localhost:8000/api/authentication/get_current_user/";
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
        <div className='main_uploadpost_outer_container'>
            <RefreshToken />
            <div className='container'>
                <div className='navbar_container'><SideNavbar /></div>

                <div className='content_container'>
                    <h2>Upload new post</h2>

                    <div className='upload_container'>
                        <form className='actual_form' onSubmit={uploadNewImage}>
                            <div className='single_input'>
                                <label>Image Caption:</label>
                                <input type='text' placeholder='Enter the caption for your image' onChange={(e) => setImageCaption(e.target.value)} />
                            </div>
                            <div className='single_input'>
                                <label>Image:</label>
                                <input type='file' onChange={(e) => setImageFile(e.target.files[0])}/>
                            </div>
                            <div className='upload_image_container'>
                                <button className='upload_image_btn' type='submit'>Upload Image</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload