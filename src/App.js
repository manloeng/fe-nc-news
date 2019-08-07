import React, { Component } from 'react';
import * as api from './components/api';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar/Navbar';
import { Router } from '@reach/router';
import ArticleList from './components/ArticleList/ArticleList';
import Article from './components/Article/Article';
import TopicList from './components/TopicList/TopicList';
import User from './components/User/User';
import ArticleListByTopicSlug from './components/ArticleListByTopicSlug/ArticleListByTopicSlug';
import ErrorPage from './components/ErrorPage';
import UsersList from './components/UsersList/UsersList';

class App extends Component {
	state = {
		topicsData: null,
		//user needs to be passed for validation
		user: 'grumpy19'
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

	updateRoute = (route) => {
		this.setState({ route });
	};

	render() {
		const { topicsData, user } = this.state;
		return !topicsData ? (
			<p>loading...</p>
		) : (
			<div className="App">
				<Container>
					<Row>
						<Col xs={4}>
							<Navbar topicsData={topicsData} user={user} />
						</Col>
						<Col xs={8}>
							<Router>
								<TopicList
									path="/explore"
									topicsData={topicsData}
									user={user}
									updateTopicsList={this.updateTopicsList}
								/>
								<ArticleListByTopicSlug path="/explore/:topic_slug" />
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
