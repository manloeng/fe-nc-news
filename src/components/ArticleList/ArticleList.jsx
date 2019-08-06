import React, { Component } from 'react';
import './ArticleList.css';
import ArticleCard from './ArticleCard';
import * as api from '../api';
import ArticleForm from './ArticleForm';

class ArticleList extends Component {
	state = {
		articleListData: null
	};

	componentDidMount() {
		api.fetchArticleData().then((data) => {
			this.setState({ articleListData: data });
		});
	}

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

	render() {
		const { articleListData } = this.state;
		const { user, topicsData } = this.props;

		return !articleListData ? (
			<p>loading...</p>
		) : (
			<section id="articleCardSection">
				<article>
					{user ? (
						<ArticleForm user={user} topicsData={topicsData} updateArticlesList={this.updateArticlesList} />
					) : null}
					{articleListData.articles.map((article) => {
						return <ArticleCard article={article} key={article.article_id} />;
					})}
				</article>
			</section>
		);
	}
}

export default ArticleList;
