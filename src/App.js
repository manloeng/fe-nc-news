import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div className="App">
			<Container>
				<Row>
					<Col xs={4}>
						<Navbar />
					</Col>
					<Col xs={8}>2/3</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
