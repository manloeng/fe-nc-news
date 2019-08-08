import React from 'react';
import { Link } from '@reach/router';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './TopicCard.css';
import Image from 'react-bootstrap/Image';

const TopicCard = ({ slug, description }) => {
	const imgRef = {
		coding:
			'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
		cooking:
			'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
		football:
			'https://images.unsplash.com/photo-1521731978332-9e9e714bdd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
	};

	if (!imgRef[slug]) {
		imgRef[slug] =
			'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80';
	}
	return (
		<section id="topicSection">
			<Link to={`/explore/${slug}`}>
				<h2>{slug}</h2>
				<Image src={`${imgRef[slug]}`} roundedCircle fluid />
				<Jumbotron id="topicJumbo" fluid>
					<p>{description}</p>
				</Jumbotron>
			</Link>
		</section>
	);
};

export default TopicCard;
