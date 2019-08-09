import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import * as api from '../api';
import './Article.css';
import ErrorPage from '../ErrorPage';
import CommentListByArticleId from './Article/CommentListByArticleId';
import ArticleData from './Article/ArticleData';
import Loader from '../Loader/Loader';
import DeleteModal from '../DeleteModal/DeleteModal';

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
		return !articleData ? (
			<Loader />
		) : (
			<section className="article">
				<div className="articleDivider">
					<ArticleData {...articleData} user={user} />
					{user === articleData.author && <DeleteModal user={user} />}
				</div>
				<CommentListByArticleId article_id={article_id} user={user} />
			</section>
		);
	}
}

export default Article;
