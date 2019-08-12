import React, { Component } from 'react';
import * as api from '../api';
import ErrorPage from '../ErrorPage';
import './user.css';
import Header from '../partials/Header/Header';
import Image from 'react-bootstrap/Image';
import Loader from '../partials/Loader/Loader';

class User extends Component {
  state = {
    user: null,
    err: null
  };

  componentDidMount() {
    this.fetchUsersData();
  }

  fetchUsersData = () => {
    api
      .getUserData(this.props.username)
      .then((user) => {
        this.setState({ user });
      })
      .catch((err) => {
        const { status, data } = err.response;
        this.setState({ err: { status, msg: data.msg } });
      });
  };

  render() {
    const { user, err } = this.state;
    const { username } = this.props;

    if (err) return <ErrorPage {...err} />;
    return !user ? (
      <Loader />
    ) : (
      <section className="userSection">
        <Header route={username} />
        <figure id="userProfile">
          <Image src={user.avatar_url} alt="users avatar" fluid />
          <p>Username: {user.username}</p>
          <p>Name: {user.name}</p>
        </figure>
      </section>
    );
  }
}

export default User;
