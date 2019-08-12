import React, { Component } from 'react';
import ArticleCard from '../HomePage/ArticleCard';
import * as api from '../api';
import Header from '../partials/Header/Header';
import './ArticleList.css';
import Pagination from '../partials/Pagination/Pagination';
import Loader from '../partials/Loader/Loader';
import ArticleSorter from '../partials/ArticleSorter/ArticleSorter';
import AddArticleModal from './AddArticleModal';
import ErrorPage from '../ErrorPage';

class ArticleList extends Component {
  state = {
    articleListData: null,
    topicErr: null,
    err: null,
    sort_by: 'Date',
    order: 'Desc',
    isLoading: true,
    displayErr: false
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
    const { topic_slug, topics } = this.props;
    const query = { topic: topic_slug, sort_by, order };

    this.setState({ isLoading: true });
    api
      .getArticleData(query)
      .then((data) => {
        this.setState({ articleListData: data, err: null, displayErr: false, isLoading: false });
      })
      .catch((err) => {
        const { status, data } = err.response;
        topics.forEach((topic) => {
          if (topic_slug.trim() === topic.slug.trim()) {
            this.setState({ err: { status, msg: data.msg }, topicErr: null, displayErr: true, isLoading: false });
          }
        });
        if (!this.state.err) {
          this.setState({
            topicErr: { status, msg: 'Topic not found!' },
            err: null,
            displayErr: true,
            isLoading: true
          });
        }
      });
  };

  updateViaPagination = (articleListData) => {
    this.setState({ articleListData });
  };

  handleQueryChange = ({ sort_by, order }) => {
    this.setState({ sort_by, order });
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
    const { articleListData, topicErr, isLoading, displayErr } = this.state;
    const { topic_slug, user, topics, path } = this.props;

    if (displayErr && topicErr) return <ErrorPage {...topicErr} />;
    if (isLoading) return <Loader />;
    return (
      <div>
        <section className="topicSection">
          {/*  if theres no err show  header */}
          {!topicErr && <Header route={topic_slug} />}
          {displayErr && <p>No Articles Found</p>}

          {/*  if !err and articles are found show sorter and if path is '/' show modal*/}
          {articleListData &&
          !displayErr && <ArticleSorter handleQueryChange={this.handleQueryChange} /> &&
          path === '/' && <AddArticleModal user={user} topics={topics} updateArticlesList={this.updateArticlesList} />}

          {/*  prevent null error when refreshing on the topic page*/
          articleListData &&
            !displayErr &&
            articleListData.articles.map((article) => {
              return <ArticleCard {...article} key={article.article_id} />;
            })}
        </section>

        {/*  if !err and articles are found show pagination*/}
        {articleListData &&
        !displayErr && (
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
