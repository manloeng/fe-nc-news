import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './ArticleSorter.css';

class ArticleSorter extends Component {
  state = {
    sort_by: 'Date',
    order: 'Desc'
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { sort_by, order } = this.state;
    return (
      <Form id="sorterForm">
        <Form.Row>
          <Form.Group as={Col} controlId="sort_by">
            <Form.Label>Sort By:</Form.Label>
            <Form.Control as="select" onChange={this.handleChange} value={sort_by}>
              <option>Date</option>
              <option>Author</option>
              <option>Topic</option>
              <option>Comment Count</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="order">
            <Form.Label>Order By:</Form.Label>
            <Form.Control as="select" onChange={this.handleChange} value={order}>
              <option>Desc</option>
              <option>Asc</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default ArticleSorter;
