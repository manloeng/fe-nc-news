import axios from 'axios';
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

export const getArticleDataByTopicSlug = (query) => {
  return request.get(`/articles`, { params: query }).then(({ data }) => {
    return data;
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
  return request.post('/topics', inputBody).then(({ data }) => {
    return data;
  });
};

export const postArticleData = (inputBody, username) => {
  const newInput = { ...inputBody, username };
  console.log(newInput)
  return request.post('/articles', newInput).then(({ data }) => {
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
  return request.patch(`/articles/${article_id}`, { inc_votes });
};

export const patchCommentVoteByCommentId = (inc_votes, comment_id) => {
  return request.patch(`/comments/${comment_id}/`, { inc_votes });
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
