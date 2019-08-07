import React, { Component } from 'react';
import * as api from '../api';
import ErrorPage from '../ErrorPage';
import './user.css';
import Header from '../Header/Header';

class User extends Component {
	state = {
		userData: null,
		err: null
	};

	componentDidMount() {
		this.fetchUsersData();
	}

	fetchUsersData = () => {
		api
			.getUserData(this.props.username)
			.then((user) => {
				this.setState({ userData: user });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({ err: { status, msg: data.msg } });
			});
	};

	render() {
		const { userData, err } = this.state;
		const { username } = this.props;
		
		if (err) return <ErrorPage {...err} />;
		return !userData ? (
			<p>loading...</p>
		) : (
			<>
			<Header route={username}/>
			<figure id="userProfile">
				<img src={userData.avatar_url} alt="users avatar" />
				<p>Username: {userData.username}</p>
				<p>Name: {userData.name}</p>
			</figure>
			</>
		);
	}
}

export default User;
