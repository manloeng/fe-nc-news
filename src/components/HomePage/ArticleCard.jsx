import React, { Component } from "react";
import "./ArticleCard.css";
import { Link } from "@reach/router";
import * as api from "../api";

function ArticleCard({
  author,
  comment_count,
  created_at,
  title,
  topic,
  votes,
  article_id
}) {
  return (
    <ul id="articleCard">
      <li>
        <Link to={`/articles/${article_id}`}>
          <h3>
            <u>{title}</u>
          </h3>
        </Link>
        <p>
          <i className="fa fa-comments-o fa-2x" aria-hidden="true" />{" "}
          {comment_count}
        </p>
        <Link to={`/explore/${topic}`}>Topic: {topic}</Link>
        <br />
        <Link to={`/users/${author}`}>By: {author}</Link>
        <p>
          <span role="img" aria-label="upVote">
            ❤
          </span>
          {votes}
        </p>
        <p>
          <span role="img" aria-label="created_at">
            🗓
          </span>
          {api.convertDateFormat(created_at)}
        </p>
      </li>
    </ul>
  );
}

export default ArticleCard;
