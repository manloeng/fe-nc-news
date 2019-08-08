import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './ArticleSorter.css';

const ArticleSorter = ({ handleChange }) => {
	return (
		<Form id="sorterForm">
			<Form.Row>
				<Form.Group as={Col} controlId="sort_by">
					<Form.Label>Sort By:</Form.Label>
					<Form.Control as="select" onChange={handleChange}>
						<option>Date</option>
						<option>Author</option>
						<option>Topic</option>
					</Form.Control>
				</Form.Group>

				<Form.Group as={Col} controlId="order">
					<Form.Label>Order By:</Form.Label>
					<Form.Control as="select" onChange={handleChange}>
						<option>Desc</option>
						<option>Asc</option>
					</Form.Control>
				</Form.Group>
			</Form.Row>
		</Form>
	);
};

export default ArticleSorter;
