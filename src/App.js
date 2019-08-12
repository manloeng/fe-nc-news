import React, { Component } from 'react';
import * as api from './components/api';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar/Navbar';
import { Router } from '@reach/router';
import ArticleList from './components/HomePage/ArticleList';
import Article from './components/ArticlePage/Article.jsx';
import TopicList from './components/TopicsPage/TopicList';
import User from './components/UserPage/User';
import ErrorPage from './components/ErrorPage';
import UsersList from './components/UsersPage/UsersList';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    topicsData: null,
    //user needs to be passed for validation
    user: 'grumpy19',
    avatar_url: 'https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg'
  };

  componentDidMount() {
    this.fetchTopicsData();
  }

  fetchTopicsData = () => {
    api.getTopicsData().then((topics) => {
      this.setState({ topicsData: topics });
    });
  };

  updateTopicsList = (data) => {
    this.setState({ topicsData: data });
  };

  render() {
    const { topicsData, user, avatar_url } = this.state;
    return !topicsData ? (
      <Loader />
    ) : (
      <div className="App">
        <Container>
          <Row>
            <Col xs={4}>
              <Navbar topicsData={topicsData} user={user} avatar_url={avatar_url} />
            </Col>
            <Col xs={8}>
              <Router>
                <TopicList
                  path="/explore"
                  topicsData={topicsData}
                  user={user}
                  updateTopicsList={this.updateTopicsList}
                />
                <ArticleList path="/explore/:topic_slug" user={user} topicsData={topicsData} />
                <ArticleList path="/" user={user} topicsData={topicsData} />
                <ArticleList path="/articles" user={user} topicsData={topicsData} />
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
