import React, { Component } from 'react';
import './CommentListByArticleId.css';
import Button from 'react-bootstrap/Button';
import * as api from '../api';

class CommentListByArticleId extends Component {
	state = {
		commentListData: null
	};

	componentDidMount() {
		this.fetchCommentDataByArticleId();
	}

	fetchCommentDataByArticleId = () => {
		const { article_id } = this.props;
		api.getCommentDataByArticleId(article_id).then((comments) => {
			this.setState({ commentListData: comments });
		});
	};

	render() {
		const { commentListData } = this.state;
		const { user } = this.props;
		return !commentListData ? (
			<p>loading...</p>
		) : (
			<section>
				<article id="commentListByArticleId">
					{!commentListData.length ? (
						<p>No comments available</p>
					) : (
						<ul>
							{commentListData.map((comment) => {
								return (
									<li key={comment.comment_id} id="comment">
										<p>By: {comment.author}</p>
										<br />
										<p>{comment.body}</p>
										<br />
										<p>Created at: {comment.created_at}</p>
										<p>Votes: {comment.votes}</p>
										{user === comment.author && (
											<Button variant="danger" onClick={this.handleClick}>
												Delete Comment
											</Button>
										)}
									</li>
								);
							})}
						</ul>
					)}
				</article>
			</section>
		);
	}
}

export default CommentListByArticleId;
