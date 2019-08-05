import React from 'react';
import Row from 'react-bootstrap/Row';

const Navbar = ({ topicData: { topics } }) => {
	console.log(topics);
	return (
		<nav id="navbar">
			<ul>
				<Row>
					<li>Home</li>
				</Row>
				{topics.map((topic) => {
					return (
						<Row key={topic.slug}>
							<li>{topic.slug}</li>
						</Row>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
