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
		//user needs to be passed for validation
		user: 'grumpy19'
	};

	componentDidMount() {
		api.fetchTopicsData().then((topics) => {
			this.setState({ topicsData: topics });
		});
	}

	componentDidUpdate(prevProp, prevState) {}

	updateTopicsList = (data) => {
		this.setState({ topicsData: data });
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
							<Header />
							<Router>
								<TopicList
									path="/explore"
									topicsData={topicsData}
									user={user}
									updateTopicsList={this.updateTopicsList}
								/>
								<ArticleList path="/" user={user} topicsData={topicsData} />
								<ArticleList path="/articles" user={user} topicsData={topicsData} />
								<Article path="/articles/:article_id" />
								<User path="/users/:username" />
							</Router>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
