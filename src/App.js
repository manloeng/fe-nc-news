import React, { Component } from 'react';
import * as api from './components/api';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from './components/partials/Navbar/Navbar';
import { Router } from '@reach/router';
import ArticleList from './components/HomePage/ArticleList';
import Article from './components/ArticlePage/Article.jsx';
import TopicList from './components/TopicsPage/TopicList';
import User from './components/UserPage/User';
import ErrorPage from './components/ErrorPage';
import UsersList from './components/UsersPage/UsersList';
import Loader from './components/partials/Loader/Loader';

class App extends Component {
  state = {
    topics: null,
    //user needs to be passed for validation
    user: 'grumpy19',
    avatar_url: 'https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg'
  };

  componentDidMount() {
    this.fetchTopicsData();
  }

  fetchTopicsData = () => {
    api.getTopicsData().then((topics) => {
      this.setState({ topics });
    });
  };

  updateTopicsList = (topics) => {
    this.setState({ topics });
  };

  render() {
    const { topics, user, avatar_url } = this.state;
    return !topics ? (
      <Loader />
    ) : (
      <div className="App">
        <Container>
          <Row>
            <Col xs={4}>
              <Navbar topics={topics} user={user} avatar_url={avatar_url} />
            </Col>
            <Col xs={8}>
              <Router>
                <TopicList path="/explore" topics={topics} user={user} updateTopicsList={this.updateTopicsList} />
                <ArticleList path="/explore/:topic_slug" user={user} topics={topics} />
                <ArticleList path="/" user={user} topics={topics} />
                <ArticleList path="/articles" user={user} topics={topics} />
                <Article path="/articles/:article_id" user={user} />
                <UsersList path="/users" />
                <User path="/users/:username" />
                <ErrorPage default />
              </Router>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
