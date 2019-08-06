import React, { Component } from 'react';
import './TopicList.css';
import { Link } from '@reach/router';
import TopicForm from './TopicForm';

class TopicList extends Component {
	render() {
		const { topicsData, updateTopicsList } = this.props;
		return !topicsData ? (
			<p>loading...</p>
		) : (
			<section id="topicSection">
				<figure>
					<TopicForm updateTopicsList={updateTopicsList} />
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
	}
}
export default TopicList;
