import React, { Component } from 'react';
import './ArticleList.css';
import ArticleCard from './ArticleCard';
import * as api from '../api';
import ArticleForm from '../ArticleForm/ArticleForm';
import ErrorPage from '../ErrorPage';
import Header from '../Header/Header';
import ArticleSorter from '../ArticleSorter/ArticleSorter';

class ArticleList extends Component {
	state = {
		articleListData: null,
		err: null,
		sort_by: 'Date',
		order: 'Desc'
	};

	componentDidMount() {
		this.fetchArticleData();
	}

	fetchArticleData = (query) => {
		api
			.getArticleData(query)
			.then((data) => {
				this.setState({ articleListData: data });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({ err: { status, msg: data.msg } });
			});
	};

	updateArticlesList = (article) => {
		this.setState((currentState) => {
			return {
				articleListData: {
					total_count: currentState.total_count,
					articles: [ article, ...currentState.articleListData.articles ]
				}
			};
		});
	};

	handleChange = (e) => {
		const { id, value } = e.target;
		this.setState({ [id]: value });
	};

	componentDidUpdate(prevProp, prevState) {
		let { sort_by, order } = this.state;

		if (prevState.sort_by !== sort_by || prevState.order !== order) {
			if (sort_by === 'Date') {
				sort_by = 'created_at';
			}
			this.fetchArticleData({ sort_by: sort_by.toLowerCase(), order: order.toLowerCase() });
		}
	}

	render() {
		const { articleListData, err, sort_by, order } = this.state;
		const { user, topicsData, path } = this.props;

		if (err) return <ErrorPage {...err} />;
		return !articleListData ? (
			<p>loading...</p>
		) : (
			<section id="articleCardSection">
				<Header route={path} />
				<ArticleSorter handleChange={this.handleChange} sort_by={sort_by} order={order} />
				{user ? <ArticleForm user={user} topicsData={topicsData} updateArticlesList={this.updateArticlesList} /> : null}
				{articleListData.articles.map((article) => {
					return <ArticleCard article={article} key={article.article_id} />;
				})}
			</section>
		);
	}
}

export default ArticleList;
