import React, { Component } from 'react';
import './ArticleList.css';
import ArticleCard from './ArticleList/ArticleCard';
import * as api from '../api';
import ErrorPage from '../ErrorPage';
import Header from '../Header/Header';
import ArticleSorter from '../ArticleSorter/ArticleSorter';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import AddArticleModal from './AddArticleModal';

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

	updateViaPagination = (articleListData) => {
		this.setState({ articleListData });
	};

	componentDidUpdate(prevProp, prevState) {
		let { sort_by, order } = this.state;

		if (prevState.sort_by !== sort_by || prevState.order !== order) {
			if (sort_by === 'Date') {
				sort_by = 'created_at';
			}
			if (sort_by === 'Comment Count') {
				sort_by = 'comment_count';
			}
			this.fetchArticleData({ sort_by: sort_by.toLowerCase(), order: order.toLowerCase() });
		}
	}

	render() {
		const { articleListData, err } = this.state;
		const { user, topicsData, path } = this.props;

		if (err) return <ErrorPage {...err} />;
		return !articleListData ? (
			<Loader />
		) : (
			<div>
				<section id="articleCardSection">
					<Header route={path} />
					<ArticleSorter handleChange={this.handleChange} />
					<AddArticleModal user={user} topicsData={topicsData} updateArticlesList={this.updateArticlesList} />
					{articleListData.articles.map((article) => {
						return <ArticleCard article={article} key={article.article_id} />;
					})}
				</section>
				<Pagination articleListData={articleListData} updateViaPagination={this.updateViaPagination} />
			</div>
		);
	}
}

export default ArticleList;
