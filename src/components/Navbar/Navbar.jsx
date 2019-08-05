import React from 'react';
import Row from 'react-bootstrap/Row';
import './Navbar.css';

const Navbar = ({ topicsData: { topics } }) => {
	return (
		<nav id="navbar">
			<ul>
				<Row>
					<li>Home</li>
				</Row>
				{topics.map((topic) => {
					const formattedSlug = topic.slug[0].toUpperCase() + topic.slug.slice(1);
					return (
						<Row key={topic.slug}>
							<li>{formattedSlug}</li>
						</Row>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
