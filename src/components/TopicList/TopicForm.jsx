import React, { Component } from 'react';

class TopicForm extends Component {
	state = {
		topicSlug: null,
		topicDescription: null
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

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.fetchInputs(this.state);
	};
}

export default TopicForm;
