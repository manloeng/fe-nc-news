import React from 'react';
import Button from 'react-bootstrap/Button';
import * as api from '../../api';

const CommentData = ({ comment_id, author, body, created_at, votes, user, handleClick }) => {
	return (
		<div>
			<li id="comment">
				<p>By: {author}</p>
				<br />
				<p>{body}</p>
				<br />
				<p>Created at: {api.convertDateFormat(created_at)}</p>
				<p>Votes: {votes}</p>
				{user === author && (
					<Button variant="danger" onClick={handleClick} name={comment_id}>
						Delete Comment
					</Button>
				)}
			</li>
		</div>
	);
};

export default CommentData;
