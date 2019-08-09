import React, { Component } from 'react';
import * as api from '../api';
import './Voter.css';

class Voter extends Component {
	state = {
		inc_votes: 0
	};

	updateVote = (voteChange) => {
		const { article_id, comment_id } = this.props;
		this.setState(({ inc_votes }) => {
			return { inc_votes: inc_votes + voteChange };
		});
		if (comment_id) {
			api.patchCommentVoteByCommentId(voteChange, comment_id);
		} else {
			api.patchArticleVoteByArticleId(voteChange, article_id);
		}
	};

	render() {
		const { votes, user } = this.props;
		const { inc_votes } = this.state;

		return (
			<div className="voteIcon">
				{user && (
					<button
						onClick={(e) => {
							this.updateVote(1);
						}}
						disabled={inc_votes >= 1}
					>
						<i className="fa fa-arrow-up" aria-hidden="true" />
					</button>
				)}
				<p>Votes: {inc_votes + votes}</p>
				{user && (
					<button
						onClick={(e) => {
							this.updateVote(-1);
						}}
						disabled={inc_votes <= -1}
					>
						<i className="fa fa-arrow-down" aria-hidden="true" />
					</button>
				)}
			</div>
		);
	}
}

export default Voter;
