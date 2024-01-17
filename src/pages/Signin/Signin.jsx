import React, { useState } from 'react'
import "./Signin.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';

const Signin = () => {

    const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

    const currentBaseApiUrl = process.en.PRODUCTION_ENVIROMENT_URL

    const signinUserToDashboard = (e) => {
		e.preventDefault();
		const formData = new FormData()
		formData.append("username", username);
		formData.append("password", password);

		const url = `${currentBaseApiUrl}api/authentication/login_user/`
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		}

		axios.post(url, formData, config).then((response) => {
			const { access_token, refresh_token } = response.data

			console.log("your access token", access_token)
			console.log("your refresh token", refresh_token)

			Cookies.set("access_token", access_token);
			Cookies.set("refresh_token", refresh_token);
		})

		alert("Login was successful")
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
                    <h2>Signin to your account here</h2>

                    <form className='actual_form' onSubmit={signinUserToDashboard}>
                        <div className='single_input'>
                            <input type='text' placeholder='please enter username' onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className='single_input'>
                            <input type='password' placeholder='please enter your password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className='signup_btn_container'>
                            <button type='submit' className='signup_btn'>Signin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signin