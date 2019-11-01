import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TopicForm from "./TopicForm";

function AddTopicModal({ user, updateTopicsList }) {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show)

  return (
    <div>
      <Button variant="primary" onClick={toggle}>
        Add Topic
      </Button>

      <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Add Topic</Modal.Title>
        </Modal.Header>
        {user ? (
          <TopicForm
            updateTopicsList={updateTopicsList}
            handleClose={toggle}
          />
        ) : (
          <p>Please log in!</p>
        )}
      </Modal>
    </div>
  );
}

export default AddTopicModal;
