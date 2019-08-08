import React, { Component } from 'react';
import * as api from '../api';
import ErrorPage from '../ErrorPage';
import UserCard from './UsersList/UserCard';
import Header from '../Header/Header';
import './UsersList.css';
import Spinner from 'react-bootstrap/Spinner';

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
		const { path } = this.props;
		if (err) return <ErrorPage {...err} />;
		return !usersList ? (
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		) : (
			<section className="usersSection">
				<Header route={path} />
				{usersList.map((user) => {
					return <UserCard {...user} key={user.username} />;
				})}
			</section>
		);
	}
}

export default UsersList;
