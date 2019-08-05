import axios from 'axios';

const request = axios.create({
	baseURL: 'https://project-nc-news.herokuapp.com/api'
});

export const fetchArticleData = (article_id = '') => {
	return request.get(`/articles/${article_id}`).then(({ data }) => {
		return data;
	});
};

export const fetchTopicsData = () => {
	return request.get('/topics').then(({ data }) => {
		return data;
	});
};
