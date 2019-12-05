import React, { useState, useEffect } from "react";
import ArticleCard from "../HomePage/ArticleCard";
import * as api from "../api";
import Header from "../partials/Header/Header";
import "./ArticleList.css";
import Pagination from "../partials/Pagination/Pagination";
import Loader from "../partials/Loader/Loader";
import ArticleSorter from "../partials/ArticleSorter/ArticleSorter";
import AddArticleModal from "./AddArticleModal";
import ErrorPage from "../ErrorPage";

function ArticleList({ topic_slug, user, topics, path }) {
  const [articleListData, setArticleListData] = useState("");
  const [topicErr, setTopicErr] = useState({});
  const [err, setErr] = useState("");
  const [sort_by, setSortby] = useState("Date");
  const [order, setOrder] = useState("Desc");
  const [isLoading, setIsLoading] = useState(true);
  const [displayErr, setDesplayErr] = useState(false);

  useEffect(() => {
    fetchArticleData();
  }, []);

  useEffect(() => {
    fetchArticleData();
    if (sort_by === "Date") {
      setSortby("created_at");
    }
    if (sort_by === "Comment Count") {
      setSortby("comment_count");

      fetchArticleData(sort_by.toLowerCase(), order.toLowerCase());
    }
  }, [topic_slug, sort_by, order]);

  const fetchArticleData = (sort_by, order) => {
    const query = { topic: topic_slug, sort_by, order };
    setIsLoading(true);

    api
      .getArticleData(query)
      .then(data => {
        setArticleListData(data);
        setErr("");
        setDesplayErr(false);
        setIsLoading(false);
      })
      .catch(err => {
        const { status, data } = err.response;
        topics.forEach(topic => {
          if (topic_slug.trim() === topic.slug.trim()) {
            setErr({ status, msg: data.msg });
            setTopicErr("");
            setDesplayErr(true);
            setIsLoading(false);
          }
        });
        if (!err) {
          setErr("Topic not found!");
          setTopicErr("");
          setDesplayErr(true);
          setIsLoading(true);
        }
      });
  };

  const updateViaPagination = articleListData => {
    setArticleListData(articleListData);
  };

  const handleQueryChange = ({ sort_by, order }) => {
    setSortby(sort_by);
    setOrder(order);
  };

  const updateArticlesList = article => {
    setArticleListData({
      total_count: articleListData.total_count,
      articles: [article, ...articleListData.articles]
    });
  };

  if (displayErr && topicErr) return <ErrorPage {...topicErr} />;
  if (isLoading) return <Loader />;
  return (
    <div id="topicsSection">
      <section>
        {/*  if theres no err show  header */}
        {!topicErr && <Header route={topic_slug} />}
        {displayErr && <p>No Articles Found</p>}

        {/*  if !err and articles are found show sorter and if path is '/' show modal*/}
        {articleListData &&
          !displayErr && (
            <ArticleSorter handleQueryChange={handleQueryChange} />
          ) &&
          path === "/" && (
            <AddArticleModal
              user={user}
              topics={topics}
              updateArticlesList={updateArticlesList}
            />
          )}

        {/*  prevent null error when refreshing on the topic page*/
        articleListData &&
          !displayErr &&
          articleListData.articles.map(article => {
            return <ArticleCard {...article} key={article.article_id} />;
          })}
      </section>

      {/*  if !err and articles are found show pagination*/}
      {articleListData && !displayErr && (
        <Pagination
          articleListData={articleListData}
          updateViaPagination={updateViaPagination}
          topic_slug={topic_slug}
        />
      )}
    </div>
  );
}

export default ArticleList;
