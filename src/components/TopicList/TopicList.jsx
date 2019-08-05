import React from 'react';

const TopicList = ({ topicsData }) => {
	return (
		<section>
			<ul>
				{topicsData.topics.map((topic) => {
					return (
						<li key={topic.slug}>
							<h2>{topic.slug}</h2>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default TopicList;
