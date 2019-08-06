import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './ArticleForm.css';
import * as api from '../api';

class ArticleForm extends Component {
	state = {
		articleTitle: null,
		topicInput: 'Select Topic',
		articleDescription: null
	};

	handleClick = (e) => {
		this.setState({ topicInput: e.target.text });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		const { updateArticlesList } = this.props;
		e.preventDefault();
	};

	render() {
		const { topicsData } = this.props;
		return (
			<Form id="articleInput" onSubmit={this.handleSubmit}>
				<Form.Group controlId="exampleForm.ControlInput1">
					<Form.Label>Article Title: </Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Article Title"
						name="articleTitle"
						onChange={this.handleChange}
						required
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Select Topic</Form.Label>
					<Form.Control as="select">
						{topicsData.map((topic) => {
							return (
								<option key={topic.slug} onClick={this.handleClick}>
									{topic.slug}
								</option>
							);
						})}
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Article Description: </Form.Label>
					<Form.Control
						as="textarea"
						rows="3"
						name="articleDescription"
						placeholder="Enter Article Description"
						onChange={this.handleChange}
						required
					/>
				</Form.Group>
				<input type="submit" />
			</Form>
		);
	}
}

export default ArticleForm;
