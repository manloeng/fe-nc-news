import React from 'react';
import './TopicList.css';
import { Link } from '@reach/router';

const TopicList = ({ topicsData }) => {
	return (
		<section id="topicSection">
			<figure>
				{topicsData.topics.map((topic) => {
					return (
						<li key={topic.slug}>
							<Link to={`/explore/${topic.slug}`}>
								<h2>{topic.slug}</h2>
								<img />
								<figcaption>{topic.description}</figcaption>
							</Link>
						</li>
					);
				})}
			</figure>
		</section>
	);
};

export default TopicList;
