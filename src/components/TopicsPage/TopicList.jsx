import React, { Component } from 'react';
import './TopicList.css';
import TopicForm from './TopicList/TopicForm';
import TopicCard from './TopicList/TopicCard';
import Header from '../Header/Header';

class TopicList extends Component {
	render() {
		const { topicsData, updateTopicsList ,path, user} = this.props;
		return !topicsData ? (
			<p>loading...</p>
		) : (
			<>
			<Header route={path}/>
			<section id="topicSection">
				<figure>
					{user && <TopicForm updateTopicsList={updateTopicsList} />}
					{topicsData.map((topic) => {
						return <TopicCard {...topic} key={topic.slug} />;
					})}
				</figure>
			</section>
			</>
		);
	}
}
export default TopicList;
