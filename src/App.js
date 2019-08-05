import React, { Component } from 'react';
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

	render() {
		return (
			<div className="App">
				<Container>
					<Row>
						<Col xs={4}>
							<Navbar />
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
		);
	}
}

export default App;
