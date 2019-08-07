import React, { Component } from 'react';

class Voter extends Component {
	render() {
		const { votes } = this.props;
		return (
			<div>
				<i className="fa fa-arrow-up" aria-hidden="true" />
				<p>Votes: {votes}</p>
				<i className="fa fa-arrow-down" aria-hidden="true" />
			</div>
		);
	}
}

export default Voter;
