import React, { Component } from 'react';
import * as api from '../api';
import './user.css';

class User extends Component {
	state = {
		userData: null
	};

	componentDidMount() {
		api.fetchUsersData(this.props.username).then((data) => {
			this.setState({ userData: data });
		});
	}

	render() {
		const { userData } = this.state;
		return !userData ? (
			<p>loading...</p>
		) : (
			<figure id="userProfile">
				<img src={userData.user.avatar_url} alt="users avatar" />
				<p>Username: {userData.user.username}</p>
				<p>Name: {userData.user.name}</p>
			</figure>
		);
	}
}

export default User;
