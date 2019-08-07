import React, { Component } from 'react';
import './CommentListByArticleId.css';
import * as api from '../api';
import CommentForm from './CommentForm';
import CommentData from './CommentData';

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
					<CommentForm updateCommentList={this.updateCommentList} user={user} article_id={article_id} />
					{!commentListData.length ? (
						<p>No comments available</p>
					) : (
						<ul>
							{commentListData.map((comment) => {
								return <CommentData {...comment} user={user} key={comment.comment_id} handleClick={this.handleClick} />;
							})}
						</ul>
					)}
				</article>
			</section>
		);
	}
}

export default CommentListByArticleId;
