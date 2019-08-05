import axios from 'axios';

const request = axios.create({
	baseURL: 'https://project-nc-news.herokuapp.com/api'
});

export const fetchArticleData = (url) => {
	console.log(url, '<--- fetching via url');
	return request.get('/articles').then(({ data }) => {
		return data;
	});
};

export const fetchTopicsData = () => {
	return request.get('/topics').then(({ data }) => {
		return data;
	});
};
