import React, { Component } from 'react';
import * as api from './components/api';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { Router } from '@reach/router';
import ArticleList from './components/ArticleList/ArticleList';
import Article from './components/Article/Article';
import TopicList from './components/TopicList/TopicList';
import User from './components/Users/User';

class App extends Component {
	state = {
		topicsData: null,
		user: 'grumpy19',
		userData: null
	};

	componentDidMount() {
		api.fetchTopicsData().then((data) => {
			this.setState({ topicsData: data });
		});
		if (this.state.user) {
			api.fetchUsersData(this.state.user).then((data) => {
				this.setState({ userData: data });
			});
		}
	}

	render() {
		const { topicsData, user, userData } = this.state;
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
							<Header />
							<Router>
								<TopicList path="/explore" topicsData={topicsData} user={user} updateTopicList={this.updateTopicList} />
								<ArticleList path="/" />
								<ArticleList path="/articles" />
								<Article path="/articles/:article_id" />
								<User path="/users/:username" userData={userData} />
							</Router>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}

	updateTopicList() {}
}

export default App;
