import React, { Component } from 'react';
import './ArticleCard.css';
import { Link } from '@reach/router';
import Article from './Article';

class ArticleCard extends Component {
	state = {
		fetchArticleById: null
	};

	render() {
		const { article: { author, comment_count, created_at, title, topic, votes, article_id } } = this.props;
		return (
			<ul id="articleCard">
				<li>
					<Link to={`/${article_id}`} id="titleButton">
						{title}
					</Link>
					<p>Comment Count: {comment_count}</p>
					<p>Topic: {topic}</p>
					<p>By: {author}</p>
					<p>Votes: {votes}</p>
					<p>Created at :{created_at}</p>
				</li>
			</ul>
		);
	}

	handleClick = (e) => {
		this.setState({ fetchArticleById: e.target.name });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};
}

export default ArticleCard;
