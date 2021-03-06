import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './DeleteModal.css';

class DeleteModal extends Component {
	state = {
		show: false
	};

	handleShow = () => {
		this.setState({ show: true });
	};

	handleClose = () => {
		this.setState({ show: false });
	};

	handleDelete = (e) => {
		const { handleClick } = this.props;
		handleClick(e);
	};

	render() {
		const { show } = this.state;
		const { comment_id } = this.props;
		return (
			<div>
				<Button variant="danger" onClick={this.handleShow}>
					Delete
				</Button>
				<Modal show={show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Comfirm Delete</Modal.Title>
					</Modal.Header>
					<Modal.Body>Are You Sure You Want To Delete?</Modal.Body>
					<Modal.Footer>
						<Button variant="outline-danger" id="btnYes" name={comment_id} onClick={this.handleDelete}>
							Yes
						</Button>
						<Button variant="outline-dark" id="btnNo" onClick={this.handleClose}>
							No
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default DeleteModal;
