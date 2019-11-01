import React, { useState, useEffect } from 'react';
import * as api from '../api';
import ErrorPage from '../ErrorPage';
import './user.css';
import Header from '../partials/Header/Header';
import Image from 'react-bootstrap/Image';
import Loader from '../partials/Loader/Loader';

function User({ username }) {
  // Declare a new state variable, which we'll call "count"
  const [user, setUser] = useState([]);
  const [ err, setError ] = useState("")

  useEffect(()=>{
    const fetchUsersData = () => {
        api
          .getUserData(username)
          .then((user) => {
            setUser(user);
          })
          .catch((err) => {
            const { data } = err.response;
            setError(data.msg)
          });
      };
      fetchUsersData()
  }, [username])

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

export default User;
