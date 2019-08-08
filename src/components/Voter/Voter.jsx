import React, { Component } from 'react';
import * as api from '../api';

class Voter extends Component {
	state = {
		inc_votes: 0
	};

	voteChange = (vote) => {
		const { inc_votes } = this.state;
		const { article_id } = this.props;
		api.patchArticleVoteByArticleId(inc_votes, article_id);
		this.setState(({ inc_votes }) => {
			return { inc_votes: inc_votes + vote };
		});
	};

	render() {
		const { votes } = this.props;
		const { inc_votes } = this.state;

		return (
			<div>
				<button
					onClick={(e) => {
						this.voteChange(1);
					}}
					disabled={inc_votes >= 1}
				>
					<i className="fa fa-arrow-up" aria-hidden="true" />
				</button>
				<p>Votes: {inc_votes + votes}</p>
				<button
					onClick={(e) => {
						this.voteChange(-1);
					}}
					disabled={inc_votes <= -1}
				>
					<i className="fa fa-arrow-down" aria-hidden="true" />
				</button>
			</div>
		);
	}
}

export default Voter;
