import React, { Component } from 'react';
import './TopicList.css';
import { Link } from '@reach/router';
import TopicForm from './TopicForm';
import TopicCard from './TopicCard';

class TopicList extends Component {
	render() {
		const { topicsData, updateTopicsList } = this.props;
		return !topicsData ? (
			<p>loading...</p>
		) : (
			<section id="topicSection">
				<figure>
					<TopicForm updateTopicsList={updateTopicsList} />
					{topicsData.map((topic) => {
						return <TopicCard {...topic} key={topic.slug} />;
					})}
				</figure>
			</section>
		);
	}
}
export default TopicList;
