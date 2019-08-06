import React, { Component } from 'react';
import './TopicList.css';
import { Link } from '@reach/router';
import TopicForm from './TopicForm';
import * as api from '../api';

class TopicList extends Component {
	state = {
		topicSlug: null,
		topicDescription: null,
		display: false
	};

	componentDidUpdate(prevProp, prevState) {
		if (prevState.topicSlug !== this.state.topicSlug) {
			const { display, ...restOfState } = this.state;
			api.postTopicsData(restOfState);
		}
	}

	render() {
		const { topicsData } = this.props;
		return (
			topicsData && (
				<section id="topicSection">
					<figure>
						<TopicForm fetchInputs={this.fetchInputs} />
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
			)
		);
	}

	fetchInputs = (inputs) => {
		this.setState(inputs);
	};
}
export default TopicList;
