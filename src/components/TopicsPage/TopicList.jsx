import React, { Component } from 'react';
import './TopicList.css';
import TopicForm from './TopicList/TopicForm';
import TopicCard from './TopicList/TopicCard';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

class TopicList extends Component {
	render() {
		const { topicsData, updateTopicsList, path, user } = this.props;
		return !topicsData ? (
			<Loader />
		) : (
			<section className="topicsSection">
				<Header route={path} />
				{user && <TopicForm updateTopicsList={updateTopicsList} />}
				<div className="topicCardSection">
					{topicsData.map((topic) => {
						return <TopicCard {...topic} key={topic.slug} />;
					})}
				</div>
			</section>
		);
	}
}
export default TopicList;
