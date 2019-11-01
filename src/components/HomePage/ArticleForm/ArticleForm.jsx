import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ArticleForm.css";
import * as api from "../../api";

function ArticleForm({ updateArticlesList, user, handleClose, topics }) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");
  const [err, setErr] = useState("");

  const handleSelect = e => {
    setTopic(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (err) setErr("");
    api
      .postArticleData({ title, topic, body }, user)
      .then(article => {
        updateArticlesList(article);
        if (topic) {
          handleClose();
        }
        setTitle("");
        setTopic("");
        setBody("");
      })
      .catch(err => {
        const { status, data } = err.response;
        setErr({ status, msg: data.msg });
        setTitle("");
        setTopic("");
        setBody("");
      });
  };

  return (
    <div>
      {err && <p className="selectTopic">Please Select Topic!</p>}
      <Form id="articleInput" onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Article Title: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Article Title"
            name="title"
            onChange={e => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Topic</Form.Label>
          <Form.Control as="select" onChange={handleSelect} value={topic}>
            <option>Select Topic</option>
            {topics.map(topic => {
              return <option key={topic.slug}>{topic.slug}</option>;
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Article body: </Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="body"
            placeholder="Enter Article body"
            onChange={e => {
              setBody(e.target.value);
            }}
            value={body}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ArticleForm;
