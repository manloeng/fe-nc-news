import React, { Component } from 'react';
import ArticleCard from '../ArticleList/ArticleCard';
import * as api from '../api';

class ArticleListByTopicSlug extends Component {
	state = {
		articleDataByTopicSlug: null
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
		api.getArticleDataByTopicSlug(topic_slug).then((articles) => {
			this.setState({ articleDataByTopicSlug: articles });
		});
	};

	render() {
		const { articleDataByTopicSlug } = this.state;
		return !articleDataByTopicSlug ? (
			<p>loading</p>
		) : (
			<section>
				{articleDataByTopicSlug.map((article) => {
					return <ArticleCard article={article} key={article.article_id} />;
				})}
			</section>
		);
	}
}

export default ArticleListByTopicSlug;
