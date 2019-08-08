import React, { Component } from 'react';
import ArticleCard from '../HomePage/ArticleList/ArticleCard';
import * as api from '../api';
import Header from '../Header/Header';
import './ArticleListByTopicSlug.css';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';

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
			.then((data) => {
				this.setState({ articleDataByTopicSlug: data, err: null });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({ err: { status, msg: data.msg } });
			});
	};

	updateViaPagination = (articleDataByTopicSlug) => {
		this.setState({ articleDataByTopicSlug });
	};

	render() {
		const { articleDataByTopicSlug, err } = this.state;
		const { topic_slug } = this.props;

		return (
			<div>
				<section className="topicSection">
					<Header route={topic_slug} />
					{err && <p>No Articles Found</p>}

					{!articleDataByTopicSlug && !err ? (
						<Loader />
					) : (
						!err &&
						articleDataByTopicSlug.articles.map((article) => {
							return <ArticleCard article={article} key={article.article_id} />;
						})
					)}
				</section>
				{articleDataByTopicSlug &&
				!err && (
					<Pagination
						articleListData={articleDataByTopicSlug}
						articleDataByTopicSlug={articleDataByTopicSlug}
						updateViaPagination={this.updateViaPagination}
						topic_slug={topic_slug}
					/>
				)}
			</div>
		);
	}
}

export default ArticleListByTopicSlug;
