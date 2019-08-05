import React, { Component } from 'react';
import axios from 'axios';
import './ArticleList.css';
import ArticleCard from './ArticleCard';

class ArticleList extends Component {
	state = {
		articleListData: null
	};

	componentDidMount() {
		axios.get('https://project-nc-news.herokuapp.com/api/articles').then(({ data }) => {
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
