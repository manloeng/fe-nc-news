import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as api from "../api";

function CommentForm({ updateCommentList, user, article_id }) {
  const [commentDescription, setCommentDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    api.postCommentData(commentDescription, user, article_id).then(comment => {
      updateCommentList(comment);
      setCommentDescription("");
    });
  };

  const handleChange = e => {
    const { value } = e.target;
    setCommentDescription(value);
  };

  return (
    <Form id="commentInput" onSubmit={handleSubmit}>
      <Form.Group controlId="textArea">
        <Form.Label>Comment Description: </Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="commentDescription"
          placeholder="Enter Comment Description"
          onChange={handleChange}
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

export default CommentForm;
