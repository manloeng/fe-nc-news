import React from 'react';
import './user.css';

const User = ({ userData }) => {
	return !userData ? (
		<p>loading...</p>
	) : (
		<figure id="userProfile">
			<img src={userData.user.avatar_url} alt="users avatar" />
			<p>Username: {userData.user.username}</p>
			<p>Name: {userData.user.name}</p>
		</figure>
	);
};

export default User;
