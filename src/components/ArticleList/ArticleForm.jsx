import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './ArticleForm.css';
import * as api from '../api';

class ArticleForm extends Component {
	state = {
		articleTitle: '',
		topicInput: '',
		articleDescription: ''
	};

	handleSelect = (e) => {
		this.setState({ topicInput: e.target.value });
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		// console.log(this.state.topicInput);
		const { updateArticlesList, user } = this.props;
		e.preventDefault();
		const { ...restOfState } = this.state;
		api.postArticleData(restOfState, user).then((article) => {
			updateArticlesList(article);
			this.setState({
				articleTitle: '',
				topicInput: '',
				articleDescription: ''
			});
		});
	};

	render() {
		const { articleTitle, topicInput, articleDescription } = this.state;
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
						value={articleTitle}
						required
					/>
				</Form.Group>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Select Topic</Form.Label>
					<Form.Control as="select" onChange={this.handleSelect} value={topicInput}>
						<option>Select Topic</option>
						{topicsData.map((topic) => {
							return <option key={topic.slug}>{topic.slug}</option>;
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
						value={articleDescription}
						required
					/>
				</Form.Group>
				<input type="submit" />
			</Form>
		);
	}
}

export default ArticleForm;
