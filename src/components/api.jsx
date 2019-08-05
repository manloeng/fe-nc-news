import axios from 'axios';

const request = axios.create({
	baseURL: 'https://project-nc-news.herokuapp.com/api'
});

export const fetchArticlesData = () => {
	return request.get('/articles').then(({ data }) => {
		return data;
	});
};
