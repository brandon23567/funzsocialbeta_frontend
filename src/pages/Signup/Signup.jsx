import React, { useState } from 'react'
import "./Signup.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';

const Signup = () => {

    const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [profileImg, setProfileImg] = useState(null)

    const currentBaseApiUrl = process.en.PRODUCTION_ENVIROMENT_URL

    const createNewUser = (e) => {
			e.preventDefault()
			const url = `${currentBaseApiUrl}api/authentication/register_user/`

			const formData = new FormData();
			formData.append("username", username)
			formData.append("email", email)
			formData.append("profileImg", profileImg)
			formData.append("password", password)

			const config = {
				headers: {
					'content-type': 'multipart/form-data',
				},
			};

			axios.post(url, formData, config).then((response) => {
				
				const { access_token, refresh_token } = response.data["user has been created"];

				Cookies.set("access_token", access_token)
				Cookies.set("refresh_token", refresh_token)
				alert("Cookies have been set for u");

			});

			alert("User has been created")
			window.location.href = "/home"
	}

    return (
        <div className='main_signup_outer_container'>
            <div className='container'>
                <div className='top_signup_navbar_container'>
                    <div className='logo_container'>
                        <Link to="" className='logo_link'><h2>Socialz</h2></Link>
                    </div>
                    <ul className='navbar_links'>
                        <li>
                            <Link to="" className='actual_link'>Index</Link>
                        </li>
                        <li>
                            <Link to="" className='actual_link'>Signup</Link>
                        </li>
                        <li>
                            <Link to="" className='actual_link'>Signin</Link>
                        </li>
                    </ul>
                </div>

                <div className='content_container'>
                    <h2>Signup for new account here</h2>

                    <form className='actual_form' onSubmit={createNewUser}>
                        <div className='single_input'>
                            <input type='text' placeholder='please enter username' onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='single_input'>
                            <input type='email' placeholder='please enter email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='single_input'>
                            <input type='file' onChange={(e) => setProfileImg(e.target.files[0])}/>
                        </div>
                        <div className='single_input'>
                            <input type='password' placeholder='please enter your password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='signup_btn_container'>
                            <button type='submit' className='signup_btn'>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup