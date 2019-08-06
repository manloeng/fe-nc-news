import axios from 'axios';
import formatTopicInput from '../test/formatTopicInput';
import formatArticleInput from '../test/formatArticleInput';
import { navigate } from '@reach/router';

const request = axios.create({
	baseURL: 'https://project-nc-news.herokuapp.com/api'
});

export const getArticleData = () => {
	return request.get(`/articles`).then(({ data }) => {
		return data;
	});
};

export const getArticleDataByArticleId = (article_id) => {
	return request.get(`/articles/${article_id}`).then(({ data }) => {
		return data.article;
	});
};

export const getArticleDataByTopicSlug = (topic_slug) => {
	return request.get(`/articles`, { params: { topic: topic_slug } }).then(({ data }) => {
		return data.articles;
	});
};

export const getTopicsData = () => {
	return request.get('/topics').then(({ data }) => {
		return data.topics;
	});
};

export const getUsersData = (username) => {
	return request.get(`/users/${username}`).then(({ data }) => {
		return data.user;
	});
};

export const postTopicData = (inputBody) => {
	const formattedTopicInput = formatTopicInput(inputBody);
	return request.post('/topics', formattedTopicInput).then(({ data }) => {
		return data;
	});
};

export const postArticleData = (inputBody, user) => {
	const formattedArticleInput = formatArticleInput(inputBody, user);
	return request.post('/articles', formattedArticleInput).then(({ data }) => {
		return data.article;
	});
};

export const deleteArticleByArticleId = (article_id) => {
	return request.delete(`/articles/${article_id}`).then(() => {
		navigate('/');
	});
};
