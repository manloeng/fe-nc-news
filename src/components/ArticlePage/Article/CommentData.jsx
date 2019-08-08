import React from 'react';
import Button from 'react-bootstrap/Button';
import * as api from '../../api';
import Voter from '../../Voter/Voter';
import { Link } from '@reach/router';

const CommentData = ({ comment_id, author, body, created_at, votes, user, handleClick }) => {
	return (
		<div>
			<li id="comment">
				<Link to={`/users/${author}`}>By: {author}</Link>
				<p>{body}</p>
				<Voter votes={votes} comment_id={comment_id} />
				<p>Created at: {api.convertDateFormat(created_at)}</p>
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
