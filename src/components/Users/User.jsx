import React, { Component } from 'react';
import * as api from '../api';
import './user.css';

class User extends Component {
	state = {
		userData: null
	};

	componentDidMount() {
		api.fetchUsersData(this.props.username).then((user) => {
			this.setState({ userData: user });
		});
	}

	render() {
		const { userData } = this.state;
		return !userData ? (
			<p>loading...</p>
		) : (
			<figure id="userProfile">
				<img src={userData.avatar_url} alt="users avatar" />
				<p>Username: {userData.username}</p>
				<p>Name: {userData.name}</p>
			</figure>
		);
	}
}

export default User;
