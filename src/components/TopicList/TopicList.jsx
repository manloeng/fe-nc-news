import React from 'react';

const TopicList = ({ topicsData }) => {
	console.log(topicsData);
	return (
		<div>
			{topicsData.topics.map((topic) => {
				return <h2>{topic.slug}</h2>;
			})}
		</div>
	);
};

export default TopicList;
