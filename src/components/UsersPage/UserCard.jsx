import React from 'react';
import { Link } from '@reach/router';

const UserCard = ({ avatar_url, username, name }) => {
	return (
		<ul id="userCard">
			<li>
				<figure id="userProfile">
					{/* <img src={avatar_url} alt="users avatar" /> */}
					<Link to={`/users/${username}`}>Username: {username}</Link>
					<p>Name: {name}</p>
				</figure>
			</li>
		</ul>
	);
};

export default UserCard;
