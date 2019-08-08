import axios from 'axios';
import formatTopicInput from '../test/formatTopicInput';
import formatArticleInput from '../test/formatArticleInput';
import { navigate } from '@reach/router';

const request = axios.create({
	baseURL: 'https://project-nc-news.herokuapp.com/api'
});

export const getArticleData = (query) => {
	return request.get(`/articles`, { params: query }).then(({ data }) => {
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

export const getCommentDataByArticleId = (article_id) => {
	return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
		return data.comments;
	});
};

export const getTopicsData = () => {
	return request.get('/topics').then(({ data }) => {
		return data.topics;
	});
};

export const getUserData = (username) => {
	return request.get(`/users/${username}`).then(({ data }) => {
		return data.user;
	});
};

export const getUsersListData = () => {
	return request.get(`/users`).then(({ data }) => {
		return data.users;
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

export const postCommentData = (commentDescription, user, article_id) => {
	const commentData = {
		username: user,
		body: commentDescription
	};
	return request.post(`/articles/${article_id}/comments`, commentData).then(({ data }) => {
		return data.comment;
	});
};

export const patchArticleVoteByArticleId = (inc_votes, article_id) => {
	console.log(inc_votes);
	return request.patch(`/articles/${article_id}`, { inc_votes }).then((data) => {
		console.log(data, '<---');
		return data;
	});
};

export const deleteArticleByArticleId = (article_id) => {
	return request.delete(`/articles/${article_id}`).then(() => {
		navigate('/');
	});
};

export const deleteCommentByCommentId = (comment_id, article_id) => {
	return request.delete(`/comments/${comment_id}`).then(() => {
		return getCommentDataByArticleId(article_id);
	});
};

export const convertDateFormat = (date) => {
	return new Date(date).toLocaleString();
};
