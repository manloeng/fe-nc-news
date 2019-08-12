import React, { Component } from 'react';
import ArticleCard from '../HomePage/ArticleList/ArticleCard';
import * as api from '../api';
import Header from '../Header/Header';
import './ArticleList.css';
import Pagination from '../Pagination/Pagination';
import Loader from '../Loader/Loader';
import ArticleSorter from '../ArticleSorter/ArticleSorter';
import AddArticleModal from './AddArticleModal';
import ErrorPage from '../ErrorPage';

class ArticleList extends Component {
  state = {
    articleListData: null,
    topicErr: null,
    err: null,
    sort_by: 'Date',
    order: 'Desc'
  };

  componentDidMount() {
    this.fetchArticleData();
  }

  componentDidUpdate(prevProp, prevState) {
    const { topic_slug } = this.props;
    if (prevProp.topic_slug !== topic_slug) {
      this.fetchArticleData();
    }

    let { sort_by, order } = this.state;
    if (prevState.sort_by !== sort_by || prevState.order !== order) {
      if (sort_by === 'Date') {
        sort_by = 'created_at';
      }
      if (sort_by === 'Comment Count') {
        sort_by = 'comment_count';
      }
      this.fetchArticleData(sort_by.toLowerCase(), order.toLowerCase());
    }
  }

  fetchArticleData = (sort_by, order) => {
    const { topic_slug, topicsData } = this.props;
    const query = { topic: topic_slug, sort_by, order };
    const { articleListData } = this.state;

    if (articleListData) {
      this.setState({ articleListData: null });
    }

    api
      .getArticleData(query)
      .then((data) => {
        this.setState({ articleListData: data, err: null });
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

  updateViaPagination = (articleListData) => {
    this.setState({ articleListData });
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  updateArticlesList = (article) => {
    this.setState((currentState) => {
      return {
        articleListData: {
          total_count: currentState.total_count,
          articles: [ article, ...currentState.articleListData.articles ]
        }
      };
    });
  };

  render() {
    const { articleListData, err, topicErr } = this.state;
    const { topic_slug, user, topicsData, path } = this.props;

    return (
      <div>
        <section className="topicSection">
          {/*  if theres no err show  header */}

          {!topicErr && <Header route={topic_slug} />}

          {/*  if topic err show no topic found */}
          {topicErr && <ErrorPage {...topicErr} />}

          {/*  if err show no data found */}
          {err && <p>No Articles Found</p>}

          {/*  if !err and articles are found show sorter*/}
          {articleListData && !err && !topicErr && <ArticleSorter handleChange={this.handleChange} />}

          {path === '/' &&
          articleListData &&
          !err &&
          !topicErr && (
            <AddArticleModal user={user} topicsData={topicsData} updateArticlesList={this.updateArticlesList} />
          )}

          {/*  if !err and !articles found show loader*/}
          {!articleListData && !err && !topicErr ? (
            <Loader />
          ) : (
            /*  prevent null error when refreshing on the topic page*/
            articleListData &&
            articleListData.articles.map((article) => {
              return <ArticleCard {...article} key={article.article_id} />;
            })
          )}
        </section>

        {/*  if !err and articles are found show pagination*/}
        {articleListData &&
        !err && (
          <Pagination
            articleListData={articleListData}
            updateViaPagination={this.updateViaPagination}
            topic_slug={topic_slug}
          />
        )}
      </div>
    );
  }
}

export default ArticleList;
