import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as api from "../api";

function TopicForm({ handleClose, updateTopicsList }) {
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    handleClose();
    api
      .postTopicData({slug, description})
      .then(() => {
        return api.getTopicsData();
      })
      .then((data) => {
        updateTopicsList(data);
      });
  };

  return (
    <Form id="topicInput" onSubmit={handleSubmit}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Topic Title: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Topic Title"
          name="slug"
          onChange={e =>  setSlug(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Topic Description: </Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="description"
          placeholder="Enter Topic Description"
          onChange={e =>  setDescription(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TopicForm;
