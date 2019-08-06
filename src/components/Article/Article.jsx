import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import * as api from '../api';
import './Article.css';
import ErrorPage from '../ErrorPage';

class Article extends Component {
	state = {
		articleData: null,
		err: null
	};

	componentDidMount() {
		this.fetchArticleDataByArticleId();
	}

	fetchArticleDataByArticleId = () => {
		api
			.getArticleDataByArticleId(this.props.article_id)
			.then((article) => {
				this.setState({ articleData: article });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({ err: { status, msg: data.msg } });
			});
	};

	handleClick = (e) => {
		const { article_id } = this.props;
		api.deleteArticleByArticleId(article_id);
	};

	render() {
		const { articleData, err } = this.state;
		const { user } = this.props;

		if (err) return <ErrorPage />;
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
					{user === articleData.author && (
						<Button variant="danger" onClick={this.handleClick}>
							Delete Article
						</Button>
					)}
				</section>
			)
		);
	}
}

export default Article;
