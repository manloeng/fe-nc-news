import React from 'react';
import { Link } from '@reach/router';
import Image from 'react-bootstrap/Image';

const UserCard = ({ avatar_url, username, name }) => {
	return (
		<ul id="userCard">
			<li>
				<figure id="userProfile">
					<Image src={avatar_url} alt="users avatar" fluid />
					<br />
					<Link to={`/users/${username}`}>Username: {username}</Link>
					<p>Name: {name}</p>
				</figure>
			</li>
		</ul>
	);
};

export default UserCard;
