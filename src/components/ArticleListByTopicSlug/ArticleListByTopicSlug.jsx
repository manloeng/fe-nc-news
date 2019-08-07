import React, { Component } from 'react';
import ArticleCard from '../ArticleList/ArticleCard';
import * as api from '../api';
import Header from '../Header/Header';

class ArticleListByTopicSlug extends Component {
	state = {
		articleDataByTopicSlug: null,
		err: null
	};

	componentDidMount() {
		this.fetchArticleDataByTopicSlug();
	}

	componentDidUpdate(prevProp) {
		if (prevProp.topic_slug !== this.props.topic_slug) {
			this.fetchArticleDataByTopicSlug();
		}
	}

	fetchArticleDataByTopicSlug = () => {
		const { topic_slug } = this.props;
		api
			.getArticleDataByTopicSlug(topic_slug)
			.then((articles) => {
				this.setState({ articleDataByTopicSlug: articles, err: null });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({ err: { status, msg: data.msg } });
			});
	};

	render() {
		const { articleDataByTopicSlug, err } = this.state;
		const { topic_slug } = this.props;

		return (
			<section>
				<Header route={topic_slug} />
				{err && <p>No Articles Found</p>}

				{!articleDataByTopicSlug && !err ? (
					<p>loading</p>
				) : (
					!err &&
					articleDataByTopicSlug.map((article) => {
						return <ArticleCard article={article} key={article.article_id} />;
					})
				)}
			</section>
		);
	}
}

export default ArticleListByTopicSlug;
