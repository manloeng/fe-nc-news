import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { Router } from '@reach/router';
import ArticleList from './components/ArticleList/ArticleList';

class App extends Component {
	state = {
		topicData: null
	};

	componentDidMount() {
		axios.get('https://project-nc-news.herokuapp.com/api/topics').then(({ data }) => {
			this.setState({ topicData: data });
		});
	}

	render() {
		const { topicData } = this.state;
		return (
			topicData && (
				<div className="App">
					<Container>
						<Row>
							<Col xs={4}>
								<Navbar topicData={topicData} />
							</Col>
							<Col xs={8}>
								<Header />
								<Router>
									<ArticleList path="/" />
								</Router>
							</Col>
						</Row>
					</Container>
				</div>
			)
		);
	}
}

export default App;
