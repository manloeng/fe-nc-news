import React, { Component } from 'react';
import * as api from '../api';

class TopicForm extends Component {
	state = {
		topicSlug: null,
		topicDescription: null
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { updateTopicsList } = this.props;
		const { ...restOfState } = this.state;
		api
			.postTopicsData(restOfState)
			.then(() => {
				return api.fetchTopicsData();
			})
			.then((data) => {
				updateTopicsList(data);
			});
	};

	render() {
		return (
			<form id="topicInput" onSubmit={this.handleSubmit}>
				<label>
					Topic:
					<input type="text" name="topicSlug" placeholder="Enter Topic" onChange={this.handleChange} required />
				</label>
				<label>
					Topic Description:
					<input
						type="text"
						name="topicDescription"
						placeholder="Enter Topic Description"
						onChange={this.handleChange}
						required
					/>
				</label>
				<input type="submit" />
			</form>
		);
	}
}

export default TopicForm;
