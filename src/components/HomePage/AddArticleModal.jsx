import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ArticleForm from "./ArticleForm/ArticleForm";

function AddArticleModal({ user, topics, updateArticlesList }) {
  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  return (
    <div>
      <Button variant="primary" onClick={toggle}>
        Add Article
      </Button>

      <Modal show={show} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Add Article</Modal.Title>
        </Modal.Header>
        {user ? (
          <ArticleForm
            user={user}
            topics={topics}
            updateArticlesList={updateArticlesList}
            handleClose={toggle}
          />
        ) : (
          <p>Please log in!</p>
        )}
      </Modal>
    </div>
  );
}

export default AddArticleModal;
