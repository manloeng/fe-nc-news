import React, { Component } from 'react';
import './TopicList.css';
import TopicForm from './TopicForm';
import TopicCard from './TopicCard';
import Header from '../Header/Header';

class TopicList extends Component {
	render() {
		const { topicsData, updateTopicsList ,path} = this.props;
		return !topicsData ? (
			<p>loading...</p>
		) : (
			<>
			<Header route={path}/>
			<section id="topicSection">
				<figure>
					<TopicForm updateTopicsList={updateTopicsList} />
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
