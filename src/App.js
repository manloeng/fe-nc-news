import React, { useState, useEffect } from "react";
import * as api from "./components/api";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "./components/partials/Navbar/Navbar";
import TopNavbar from "./components/partials/Navbar/TopNavbar";
import { Router } from "@reach/router";
import ArticleList from "./components/HomePage/ArticleList";
import Article from "./components/ArticlePage/Article.jsx";
import TopicList from "./components/TopicsPage/TopicList";
import User from "./components/UserPage/User";
import ErrorPage from "./components/ErrorPage";
import UsersList from "./components/UsersPage/UsersList";
import Loader from "./components/partials/Loader/Loader";

function App() {
  const [topics, setTopics] = useState(null);
  const [user, setUser] = useState("grumpy19");
  const [avatar_url, setAvatar] = useState(
    "https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg"
  );

  useEffect(() => {
    fetchTopicsData();
  });

  const fetchTopicsData = () => {
    api.getTopicsData().then(topics => {
      setTopics(topics);
    });
  };

  const updateTopicsList = topics => {
    setTopics(topics);
  };

  return !topics ? (
    <Loader />
  ) : (
    <div className="App">
      <Container>
        <Row>
          <Col sm={4} id="sideNav">
            <Navbar topics={topics} user={user} avatar_url={avatar_url} />
          </Col>
          <Col id="mainCol">
            <TopNavbar topics={topics} user={user} avatar_url={avatar_url} />
            <Router>
              <TopicList
                path="/explore"
                topics={topics}
                user={user}
                updateTopicsList={updateTopicsList}
              />
              <ArticleList
                path="/explore/:topic_slug"
                user={user}
                topics={topics}
              />
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

export default App;
