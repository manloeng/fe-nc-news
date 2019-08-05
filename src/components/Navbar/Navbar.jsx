import React from 'react';
import Row from 'react-bootstrap/Row';
import './Navbar.css';
import { Link } from '@reach/router';

const Navbar = ({ topicsData: { topics } }) => {
	return (
		<nav id="navbar">
			<Row id="profile" />
			<Row>
				<Link to="/">Home</Link>
			</Row>
			{topics.map((topic) => {
				const formattedSlug = topic.slug[0].toUpperCase() + topic.slug.slice(1);
				return (
					<Row key={topic.slug}>
						<Link to={`/${topic.slug}`}>{formattedSlug}</Link>
					</Row>
				);
			})}
		</nav>
	);
};

export default Navbar;
