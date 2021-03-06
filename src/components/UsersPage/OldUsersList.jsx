import React, { Component } from 'react';
import * as api from '../api';
import ErrorPage from '../ErrorPage';
import UserCard from './UserCard';
import Header from '../partials/Header/Header';
import './UsersList.css';
import Loader from '../partials/Loader/Loader';

class UsersList extends Component {
  state = {
    users: null,
    err: null
  };

  componentDidMount() {
    this.fetchUsersData();
  }

  fetchUsersData = () => {
    api
      .getUsersListData()
      .then((users) => {
        this.setState({ users });
      })
      .catch((err) => {
        const { status, data } = err.response;
        this.setState({ err: { status, msg: data.msg } });
      });
  };

  render() {
    const { users, err } = this.state;
    const { path } = this.props;
    if (err) return <ErrorPage {...err} />;
    return !users ? (
      <Loader />
    ) : (
      <section id="usersSection">
        <Header route={path} />
        <div className="userCardSection">
          {users.map((user) => {
            return <UserCard {...user} key={user.username} />;
          })}
        </div>
      </section>
    );
  }
}

export default UsersList;
