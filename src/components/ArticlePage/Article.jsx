import React, { useState, useEffect } from "react";
import * as api from "../api";
import "./Article.css";
import ErrorPage from "../ErrorPage";
import CommentListByArticleId from "./CommentListByArticleId";
import ArticleData from "./ArticleData";
import Loader from "../partials/Loader/Loader";
import DeleteModal from "../partials/DeleteModal/DeleteModal";

function Article({ article_id, user }) {
  const [article, setArticle] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {

  const fetchArticleDataByArticleId = () => {
    api
      .getArticleDataByArticleId(article_id)
      .then(article => {
        setArticle(article);
      })
      .catch(err => {
        const { status, data } = err.response;
        setErr({ err: { status, msg: data.msg } });
      });
  };
  
    fetchArticleDataByArticleId();
  }, []);


  const handleClick = e => {
    api.deleteArticleByArticleId(article_id);
  };

  if (err) return <ErrorPage {...err} />;
  return !article ? (
    <Loader />
  ) : (
    <section id="articleSection">
      <div className="articleDivider">
        <ArticleData {...article} user={user} />
        {user === article.author && <DeleteModal handleClick={handleClick} />}
      </div>
      <CommentListByArticleId article_id={article_id} user={user} />
    </section>
  );
}

export default Article;
