import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

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
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		const { topicsData } = this.props;
		const { titleInput, topicInput, bodyInput } = this.state;
		return (
			<form id="articleInput" onSubmit={this.handleSubmit}>
				<label>
					Article Title:
					<input
						type="text"
						name="articleTitle"
						placeholder="Enter Article Title"
						onChange={this.handleChange}
						required
					/>
				</label>
				<label>
					<Dropdown>
						<Dropdown.Toggle variant="secondary" id="dropdown-basic">
							{topicInput}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{topicsData.map((topic) => {
								return (
									<Dropdown.Item key={topic.slug} onClick={this.handleClick}>
										{topic.slug}
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
				</label>
				<label>
					Article Description:
					<input
						type="text"
						name="articleDescription"
						placeholder="Enter Article Description"
						onChange={this.handleChange}
						required
					/>
				</label>

				<input type="submit" />
			</form>
		);
	}
}

export default ArticleForm;
