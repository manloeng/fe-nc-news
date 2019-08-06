import React, { Component } from 'react';
import * as api from '../api';
import './Article.css';

class Article extends Component {
	state = {
		articleData: null
	};

	componentDidMount() {
		api.fetchArticleDataByArticleId(this.props.article_id).then(({ article }) => {
			this.setState({ articleData: article });
		});
	}

	render() {
		const { articleData } = this.state;
		return (
			articleData && (
				<section className="article">
					<header>
						<h3>{articleData.title}</h3>
					</header>
					<ul>
						<li>
							<p>Topic: {articleData.topic}</p>
							<p>By: {articleData.author}</p>
							<article>
								<p>{articleData.body}</p>
							</article>
							<p>Votes: {articleData.votes}</p>
							<p>Created at: {articleData.created_at}</p>
							<p>Comment Cout: {articleData.comment_count}</p>
						</li>
					</ul>
				</section>
			)
		);
	}
}

export default Article;
