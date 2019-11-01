import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TopicForm from './TopicForm';

class AddTopicModal extends Component {
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
		const { user, updateTopicsList } = this.props;
		return (
			<div>
				<Button variant="primary" onClick={this.handleShow}>
					Add Topic
				</Button>

				<Modal show={show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add Topic</Modal.Title>
					</Modal.Header>
					{user ? (
						<TopicForm updateTopicsList={updateTopicsList} handleClose={this.handleClose} />
					) : (
						<p>Please log in!</p>
					)}
				</Modal>
			</div>
		);
	}
}

export default AddTopicModal;
