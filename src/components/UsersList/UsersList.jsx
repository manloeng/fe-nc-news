import React, { Component } from 'react';
import * as api from '../api';
import ErrorPage from '../ErrorPage';
import UserCard from './UserCard';
import Header from '../Header/Header';

class UsersList extends Component {
	state = {
		usersList: null,
		err: null
	};

	componentDidMount() {
		this.fetchUsersData();
	}

	fetchUsersData = () => {
		api
			.getUsersListData()
			.then((users) => {
				this.setState({ usersList: users });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({ err: { status, msg: data.msg } });
			});
	};

	render() {
		const { usersList, err } = this.state;
		const {path} = this.props
		if (err) return <ErrorPage {...err} />;
		return !usersList ? (
			<p>loading...</p>
		) : (
			<>
			<Header route={path}/>
			{usersList.map((user) => {
				return <UserCard {...user} key={user.username} />;
			})}
			</>
		);
	}
}

export default UsersList;
