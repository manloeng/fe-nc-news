import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Pagination extends Component {
	render() {
		return (
			<div>
				<Button id="pagination">prev</Button>
				<Button id="pagination">next</Button>
			</div>
		);
	}
}

export default Pagination;
