import axios from 'axios';
import formatTopicInput from '../test/formatTopicInput';

const request = axios.create({
	baseURL: 'https://project-nc-news.herokuapp.com/api'
});

export const fetchArticleData = () => {
	return request.get(`/articles`).then(({ data }) => {
		return data;
	});
};

export const fetchArticleDataByArticleId = (article_id) => {
	return request.get(`/articles/${article_id}`).then(({ data }) => {
		return data;
	});
};

export const fetchTopicsData = () => {
	return request.get('/topics').then(({ data }) => {
		return data;
	});
};

export const fetchUsersData = (username) => {
	return request.get(`/users/${username}`).then(({ data }) => {
		return data;
	});
};

export const postTopicsData = (inputBody) => {
	const formattedTopicInput = formatTopicInput(inputBody);
	return request.post('/topics', formattedTopicInput).then(({ data }) => {
		return data;
	});
};
