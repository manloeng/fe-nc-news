import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import * as api from '../api';
import './Article.css';
import ErrorPage from '../ErrorPage';
import CommentListByArticleId from './CommentListByArticleId';
import ArticleData from './ArticleData';

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
		const { user, article_id } = this.props;

		if (err) return <ErrorPage />;
		return (
			articleData && (
				<section className="article">
					<ArticleData {...articleData} />
					{user === articleData.author && (
						<Button variant="danger" onClick={this.handleClick}>
							Delete Article
						</Button>
					)}
					<CommentListByArticleId article_id={article_id} user={user} />
				</section>
			)
		);
	}
}

export default Article;
