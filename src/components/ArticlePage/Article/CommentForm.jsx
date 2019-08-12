import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as api from '../../api';

class CommentForm extends Component {
  state = {
    commentDescription: ''
  };

  handleSubmit = (e) => {
    const { commentDescription } = this.state;
    const { updateCommentList, user, article_id } = this.props;
    e.preventDefault();
    api.postCommentData(commentDescription, user, article_id).then((comment) => {
      updateCommentList(comment);
      this.setState({ commentDescription: '' });
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ commentDescription: value });
  };

  render() {
    const { commentDescription } = this.state;
    return (
      <Form id="commentInput" onSubmit={this.handleSubmit}>
        <Form.Group controlId="textArea">
          <Form.Label>Comment Description: </Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="commentDescription"
            placeholder="Enter Comment Description"
            onChange={this.handleChange}
            value={commentDescription}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CommentForm;
