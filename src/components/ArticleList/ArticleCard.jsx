import React, { Component } from 'react';
import './ArticleCard.css';
import { Link } from '@reach/router';

class ArticleCard extends Component {
	render() {
		const { article: { author, comment_count, created_at, title, topic, votes, article_id } } = this.props;
		return (
			<ul id="articleCard">
				<li>
					<Link to={`/${article_id}`}>{title}</Link>
					<p>Comment Count: {comment_count}</p>
					<p>Topic: {topic}</p>
					<p>By: {author}</p>
					<p>Votes: {votes}</p>
					<p>Created at :{created_at}</p>
				</li>
			</ul>
		);
	}
}

export default ArticleCard;
