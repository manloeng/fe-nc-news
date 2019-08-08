import React from 'react';
import Row from 'react-bootstrap/Row';
import './Navbar.css';
import { Link, navigate } from '@reach/router';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = ({ topicsData, user }) => {
	return (
		<nav id="navbar">
			{user ? (
				<Row id="profile">
					<Link to={`/users/${user}`}>{user}</Link>
				</Row>
			) : (
				<Row id="profile">
					<i className="fa fa-user-circle-o fa-4x" aria-hidden="true" />
					<p>Sign In!</p>
				</Row>
			)}
			<Row>
				<i className="fa fa-home fa-4x" aria-hidden="true" />
				<Link to="/">Home</Link>
			</Row>
			<Row>
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
					{topicsData.map((topic) => {
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
			<Row className="addPost">
				<button>
					<i className="fa fa-plus-circle fa-3x" aria-hidden="true" />
				</button>
			</Row>
		</nav>
	);
};

export default Navbar;
