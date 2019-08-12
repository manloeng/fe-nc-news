import React, { Component } from 'react';
import ArticleCard from '../HomePage/ArticleList/ArticleCard';
import * as api from '../api';
import Header from '../Header/Header';
import './ArticleListByTopicSlug.css';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import ArticleSorter from '../ArticleSorter/ArticleSorter';
import ErrorPage from '../ErrorPage';

class ArticleListByTopicSlug extends Component {
  state = {
    articleDataByTopicSlug: null,
    topicErr: null,
    err: null,
    sort_by: 'Date',
    order: 'Desc'
  };

  componentDidMount() {
    this.fetchArticleDataByTopicSlug();
  }

  componentDidUpdate(prevProp, prevState) {
    const { topic_slug } = this.props;
    if (prevProp.topic_slug !== topic_slug) {
      this.fetchArticleDataByTopicSlug();
    }

    let { sort_by, order } = this.state;
    if (prevState.sort_by !== sort_by || prevState.order !== order) {
      if (sort_by === 'Date') {
        sort_by = 'created_at';
      }
      if (sort_by === 'Comment Count') {
        sort_by = 'comment_count';
      }
      this.fetchArticleDataByTopicSlug(sort_by.toLowerCase(), order.toLowerCase());
    }
  }

  fetchArticleDataByTopicSlug = (sort_by, order) => {
    const { topic_slug, topicsData } = this.props;
    const query = { topic: topic_slug, sort_by, order };
    const { articleDataByTopicSlug } = this.state;

    if (articleDataByTopicSlug) {
      this.setState({ articleDataByTopicSlug: null });
    }

    api
      .getArticleDataByTopicSlug(query)
      .then((data) => {
        this.setState({ articleDataByTopicSlug: data, err: null });
      })
      .catch((err) => {
        const { status, data } = err.response;
        topicsData.forEach((topic) => {
          if (topic_slug.trim() === topic.slug.trim()) {
            this.setState({ err: { status, msg: data.msg }, topicErr: null });
          }
        });
        if (!this.state.err) {
          this.setState({ topicErr: { status, msg: 'Topic not found!' }, err: null });
        }
      });
  };

  updateViaPagination = (articleDataByTopicSlug) => {
    this.setState({ articleDataByTopicSlug });
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { articleDataByTopicSlug, err, topicErr } = this.state;
    const { topic_slug } = this.props;
    return (
      <div>
        <section className="topicSection">
          {/*  if theres no err show  header */}

          {!articleDataByTopicSlug && !topicErr && <Header route={topic_slug} />}

          {/*  if topic err show no topic found */}
          {topicErr && <ErrorPage {...topicErr} />}

          {/*  if err show no data found */}
          {err && <p>No Articles Found</p>}

          {/*  if !err and articles are found show sorter*/}
          {articleDataByTopicSlug && !err && !topicErr && <ArticleSorter handleChange={this.handleChange} />}

          {/*  if !err and !articles found show loader*/}
          {!articleDataByTopicSlug && !err && !topicErr ? (
            <Loader />
          ) : (
            /*  prevent null error when refreshing on the topic page*/
            articleDataByTopicSlug &&
            articleDataByTopicSlug.articles.map((article) => {
              return <ArticleCard {...article} key={article.article_id} />;
            })
          )}
        </section>

        {/*  if !err and articles are found show pagination*/}
        {articleDataByTopicSlug &&
        !err && (
          <Pagination
            articleListData={articleDataByTopicSlug}
            articleDataByTopicSlug={articleDataByTopicSlug}
            updateViaPagination={this.updateViaPagination}
            topic_slug={topic_slug}
          />
        )}
      </div>
    );
  }
}

export default ArticleListByTopicSlug;
