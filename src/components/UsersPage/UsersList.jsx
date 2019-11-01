import React, { useState, useEffect } from 'react';
import * as api from '../api';
import ErrorPage from '../ErrorPage';
import UserCard from './UserCard';
import Header from '../partials/Header/Header';
import './UsersList.css';
import Loader from '../partials/Loader/Loader';

function UsersList({ path }) {
  // Declare a new state variable, which we'll call "count"
  const [users, setUsers] = useState([]);
  const [ err, setError ] = useState("")

  useEffect(()=>{
    const fetchUsersData = () => {
      api
        .getUsersListData()
        .then((users) => {
          setUsers(users);
        })
        .catch((err) => {
          const { data } = err.response;
          setError(data.msg)
        });
    };
    fetchUsersData()
  }, [])

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

export default UsersList;
