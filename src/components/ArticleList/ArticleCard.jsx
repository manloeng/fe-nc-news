import React, { Component } from 'react';
import './ArticleCard.css';
import { Link } from '@reach/router';
import * as api from '../api';

class ArticleCard extends Component {
	render() {
		const { article: { author, comment_count, created_at, title, topic, votes, article_id } } = this.props;
		return (
			<ul id="articleCard">
				<li>
					<Link to={`/articles/${article_id}`}>{title}</Link>
					<p>Comment Count: {comment_count}</p>
					<Link to={`/explore/${topic}`}>Topic: {topic}</Link>
					<br />
					<Link to={`/users/${author}`}>By: {author}</Link>
					<p>Votes: {votes}</p>
					<p>Created at :{api.convertDateFormat(created_at)}</p>
				</li>
			</ul>
		);
	}
}

export default ArticleCard;
