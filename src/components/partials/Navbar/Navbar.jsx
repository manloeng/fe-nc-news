import React from 'react';
import Row from 'react-bootstrap/Row';
import './Navbar.css';
import { Link, navigate } from '@reach/router';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Img from '../../images/logo-lg.jpg';

const Navbar = ({ topics, user, avatar_url }) => {
  return (
    <nav id="navbar">
      <Row id="profile">
        <Link to="/">
          <Image src={Img} className="logoImg" fluid />
        </Link>
      </Row>
      <Row>
        <Link to="/">
          <i className="fa fa-home fa-4x" aria-hidden="true" />
        </Link>
      </Row>
      <Row id="homeLink">
        <Link to="/">Home</Link>
      </Row>
      <Row id="user">
        <Link to={`/users/${user}`}>
          <Image src={`${avatar_url}`} className="avatarImg" fluid />
        </Link>
      </Row>
      <Row id="userLink">
        <Link to={`/users/${user}`}>{user}</Link>
      </Row>
      <Row id="user">
        <Link to={`/users`}>
          <i className="fa fa-user fa-3x" aria-hidden="true" />
        </Link>
      </Row>
      <Row id="usersLink">
        <Link to="/users">Users</Link>
      </Row>
      <Row id="splitBtnRow">
        <SplitButton
          id={`dropdown-split-variants-primary`}
          title="Explore"
          key="primary"
          onClick={() => {
            navigate(`/explore`);
          }}
        >
          <Dropdown.Item>
            <b>Select Topic...</b>
          </Dropdown.Item>
          <Dropdown.Divider />
          {topics.map((topic) => {
            const formattedSlug = topic.slug[0].toUpperCase() + topic.slug.slice(1);
            return (
              <Row key={topic.slug}>
                <Dropdown.Item
                  eventKey={`${topic.slug}`}
                  onClick={() => {
                    navigate(`/explore/${topic.slug}`);
                  }}
                >
                  <p>{formattedSlug}</p>
                  <Dropdown.Divider />
                </Dropdown.Item>
              </Row>
            );
          })}
        </SplitButton>
      </Row>
    </nav>
  );
};

export default Navbar;
