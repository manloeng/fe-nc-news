import React from 'react';

const UserCard = ({ avatar_url, username, name }) => {
	return (
		<ul id="userCard">
			<li>
				<figure id="userProfile">
					{/* <img src={avatar_url} alt="users avatar" /> */}
					<p>Username: {username}</p>
					<p>Name: {name}</p>
				</figure>
			</li>
		</ul>
	);
};

export default UserCard;
