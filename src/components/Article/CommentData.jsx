import React from 'react';
import Button from 'react-bootstrap/Button';

const CommentData = ({ comment_id, author, body, created_at, votes, user }) => {
	return (
		<div>
			<li id="comment">
				<p>By: {author}</p>
				<br />
				<p>{body}</p>
				<br />
				<p>Created at: {created_at}</p>
				<p>Votes: {votes}</p>
				{user === author && (
					<Button variant="danger" onClick={this.handleClick} name={comment_id}>
						Delete Comment
					</Button>
				)}
			</li>
		</div>
	);
};

export default CommentData;
