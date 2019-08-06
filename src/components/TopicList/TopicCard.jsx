import React from 'react';
import { Link } from '@reach/router';

const TopicCard = ({ slug, description }) => {
	return (
		<li>
			<Link to={`/explore/${slug}`}>
				<h2>{slug}</h2>
				{/* <img /> */}
				<figcaption>{description}</figcaption>
			</Link>
		</li>
	);
};

export default TopicCard;
