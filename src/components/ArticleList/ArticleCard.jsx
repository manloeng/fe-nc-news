import React, { Component } from 'react';
import './ArticleCard.css';

class ArticleCard extends Component {
	render() {
		const { article: { author, comment_count, created_at, title, topic, votes } } = this.props;
		return (
			<ul id="articleCard">
				<li>
					<header>
						<h3>{title}</h3>
					</header>
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
