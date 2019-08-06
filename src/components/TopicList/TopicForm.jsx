import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
			.postTopicData(restOfState)
			.then(() => {
				return api.getTopicsData();
			})
			.then((data) => {
				updateTopicsList(data);
			});
	};

	render() {
		return (
			<Form id="topicInput" onSubmit={this.handleSubmit}>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Topic Title: </Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Topic Title"
						name="topicTitle"
						onChange={this.handleChange}
						required
					/>
				</Form.Group>

				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Topic Description: </Form.Label>
					<Form.Control
						as="textarea"
						rows="3"
						name="topicDescription"
						placeholder="Enter Topic Description"
						onChange={this.handleChange}
						required
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default TopicForm;
