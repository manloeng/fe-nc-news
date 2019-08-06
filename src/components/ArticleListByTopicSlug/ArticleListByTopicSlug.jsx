import React, { Component } from 'react';
import ArticleCard from '../ArticleList/ArticleCard';
import * as api from '../api';

class ArticleListByTopicSlug extends Component {
	state = {
		articleDataByTopicSlug: null
	};

	componentDidMount() {
		const { topic_slug } = this.props;
		api.fetchArticleDataByTopicSlug(topic_slug).then((articles) => {
			this.setState({ articleDataByTopicSlug: articles });
		});
	}

	render() {
		const { articleDataByTopicSlug } = this.state;
		return (
			articleDataByTopicSlug && (
				<section>
					{articleDataByTopicSlug.map((article) => {
						return <ArticleCard article={article} key={article.article_id} />;
					})}
				</section>
			)
		);
	}
}

export default ArticleListByTopicSlug;
