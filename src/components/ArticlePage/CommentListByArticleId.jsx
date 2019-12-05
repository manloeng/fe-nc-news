import React, { useState, useEffect } from "react";
import * as api from "../api";
import CommentForm from "./CommentForm";
import CommentData from "./CommentData";
import "./CommentListByArticleId.css";
import Loader from "../partials/Loader/Loader";

function CommentListByArticleId({ user, article_id }) {
  const [comments, setComment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCommentDataByArticleId = () => {
      setIsLoading(true);
      api.getCommentDataByArticleId(article_id).then(comments => {
        setIsLoading(false);
        setComment(comments);
      });
    };

    fetchCommentDataByArticleId();
  },[]);

  const handleClick = e => {
    const { name } = e.target;
    api.deleteCommentByCommentId(name, article_id).then(comments => {
      setIsLoading(false);
      setComment(comments);
    });
  };

  const updateCommentList = comment => {
      setComment([comment, ...comments])
  };

  if (isLoading) return <Loader />;
  return (
    <section id="commentSection">
      <article id="commentListByArticleId">
        {user && (
          <CommentForm
            updateCommentList={updateCommentList}
            user={user}
            article_id={article_id}
          />
        )}
        {!comments.length ? (
          <p>No comments available</p>
        ) : (
          <ul>
            {comments.map(comment => {
              return (
                <CommentData
                  {...comment}
                  user={user}
                  key={comment.comment_id}
                  handleClick={handleClick}
                />
              );
            })}
          </ul>
        )}
      </article>
    </section>
  );
}

export default CommentListByArticleId;
