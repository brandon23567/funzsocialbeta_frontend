import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import LandingPage from "./pages/Index/Landing.jsx"
import SignupPage from "./pages/Signup/Signup.jsx"
import SigninPage from "./pages/Signin/Signin.jsx"
import HomePage from "./pages/Home/Home.jsx"
import Upload from './pages/UploadPost/Upload.jsx';
import UserProfile from './pages/UserProfile/UserProfile.jsx';
import CreateCommunity from './pages/CreateCommunity/CreateCommunity.jsx';
import Communities from './pages/Communities/Communities.jsx';
import UploadToCommunity from './pages/UploadPostToCommunity/UploadToCommunity.jsx';
import CommunityDetail from './pages/CommunityDetail/CommunityDetail.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
  	},
	{
		path: "/signup",
		element: <SignupPage />,
  	},
	{
		path: "/signin",
		element: <SigninPage />,
  	},
	{
		path: "/home",
		element: <HomePage />,
  	},
	{
		path: "/home/upload",
		element: <Upload />,
  	},
	{
		path: "/home/user_profile/:slug",
		element: <UserProfile />,
  	},
	{
		path: "/home/create_community",
		element: <CreateCommunity />,
  	},
	{
		path: "/home/communities",
		element: <Communities />,
  	},
	{
		path: "/home/communities/:slug/upload",
		element: <UploadToCommunity />,
  	},
	{
		path: "/home/communities/:slug",
		element: <CommunityDetail />,
  	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    	<RouterProvider router={router} />
  	</React.StrictMode>
);
