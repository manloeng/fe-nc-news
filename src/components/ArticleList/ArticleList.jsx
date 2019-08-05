import React, { Component } from 'react';
import './ArticleList.css';
import ArticleCard from './ArticleCard';
import * as api from '../api';

class ArticleList extends Component {
	state = {
		articleListData: null
	};

	componentDidMount() {
		api.fetchArticlesData().then((data) => {
			this.setState({ articleListData: data });
		});
	}

	render() {
		const { articleListData } = this.state;
		return (
			articleListData && (
				<section id="articleCardSection">
					<article>
						{articleListData.articles.map((article) => {
							return <ArticleCard article={article} key={article.article_id} />;
						})}
					</article>
				</section>
			)
		);
	}
}

export default ArticleList;