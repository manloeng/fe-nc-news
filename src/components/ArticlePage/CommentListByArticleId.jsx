import React, { Component } from 'react';
import './CommentListByArticleId.css';
import * as api from '../api';
import CommentForm from './CommentForm';
import CommentData from './CommentData';
import Loader from '../partials/Loader/Loader';

class CommentListByArticleId extends Component {
  state = {
    comments: null
  };

  componentDidMount() {
    this.fetchCommentDataByArticleId();
  }

  fetchCommentDataByArticleId = () => {
    const { article_id } = this.props;
    api.getCommentDataByArticleId(article_id).then((comments) => {
      this.setState({ comments });
    });
  };

  handleClick = (e) => {
    const { article_id } = this.props;
    const { name } = e.target;
    api.deleteCommentByCommentId(name, article_id).then((comments) => {
      this.setState({ comments: comments });
    });
  };

  updateCommentList = (comment) => {
    this.setState((currentState) => {
      return {
        comments: [ comment, ...currentState.comments ]
      };
    });
  };

  render() {
    const { comments } = this.state;
    const { user, article_id } = this.props;
    return !comments ? (
      <Loader />
    ) : (
      <section>
        <article id="commentListByArticleId">
          {user && <CommentForm updateCommentList={this.updateCommentList} user={user} article_id={article_id} />}
          {!comments.length ? (
            <p>No comments available</p>
          ) : (
            <ul>
              {comments.map((comment) => {
                return <CommentData {...comment} user={user} key={comment.comment_id} handleClick={this.handleClick} />;
              })}
            </ul>
          )}
        </article>
      </section>
    );
  }
}

export default CommentListByArticleId;
