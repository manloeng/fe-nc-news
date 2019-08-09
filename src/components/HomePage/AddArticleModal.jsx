import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ArticleForm from '../ArticleForm/ArticleForm';
import './AddArticleModal.css';

class AddArticleModal extends Component {
	state = {
		show: false
	};

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = (e) => {
		this.setState({ show: false });
	};

	render() {
		const { show } = this.state;
		const { user, topicsData } = this.props;
		return (
			<div>
				<Button variant="primary" onClick={this.handleShow}>
					Add Article
				</Button>

				<Modal show={show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add Article</Modal.Title>
					</Modal.Header>
					{user ? (
						<ArticleForm
							user={user}
							topicsData={topicsData}
							updateArticlesList={this.updateArticlesList}
							handleClose={this.handleClose}
						/>
					) : (
						<p>Please log in!</p>
					)}
				</Modal>
			</div>
		);
	}
}

export default AddArticleModal;
