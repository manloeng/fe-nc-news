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
			<Row>
				<Link to="/explore">Explore</Link>
			</Row>
			<ul>
				{topics.map((topic) => {
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
