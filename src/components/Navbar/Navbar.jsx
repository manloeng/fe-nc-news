import React from 'react';
import Row from 'react-bootstrap/Row';
import './Navbar.css';
import { Link } from '@reach/router';

const Navbar = ({ topicsData, user }) => {
	return (
		<nav id="navbar">
			<Row id="profile">
				<Link to={`/users/${user}`}>{user}</Link>
			</Row>
			<Row>
				<Link to="/">Home</Link>
			</Row>
			<Row>
				<Link to="/users">Users</Link>
			</Row>
			<Row>
				<Link to="/explore">Explore</Link>
			</Row>
			<ul>
				{topicsData.map((topic) => {
					const formattedSlug = topic.slug[0].toUpperCase() + topic.slug.slice(1);
					return (
						<Row key={topic.slug}>
							<li>
								<Link to={`/explore/${topic.slug}`}>{formattedSlug}</Link>
							</li>
						</Row>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
