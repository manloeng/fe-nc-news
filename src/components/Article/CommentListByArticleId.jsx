import React, { Component } from 'react';
import './CommentListByArticleId.css';
import Button from 'react-bootstrap/Button';
import * as api from '../api';
import CommentForm from './CommentForm';

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

	handleClick = (e) => {
		const { article_id } = this.props;
		const { name } = e.target;
		api.deleteCommentByCommentId(name, article_id).then((comments) => {
			this.setState({ commentListData: comments });
		});
	};

	updateCommentList = (comment) => {
		this.setState((currentState) => {
			return {
				commentListData: [ comment, ...currentState.commentListData ]
			};
		});
	};

	render() {
		const { commentListData } = this.state;
		const { user, article_id } = this.props;
		return !commentListData ? (
			<p>loading...</p>
		) : (
			<section>
				<article id="commentListByArticleId">
					{!commentListData.length ? (
						<p>No comments available</p>
					) : (
						<ul>
							<CommentForm updateCommentList={this.updateCommentList} user={user} article_id={article_id} />
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
											<Button variant="danger" onClick={this.handleClick} name={comment.comment_id}>
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
