import React from 'react';
import Button from 'react-bootstrap/Button';
import * as api from '../../api';
import Voter from '../../Voter/Voter';
import { Link } from '@reach/router';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './CommentData.css';
import DeleteModal from '../../DeleteModal/DeleteModal';

const CommentData = ({ comment_id, author, body, created_at, votes, user, handleClick }) => {
	return (
		<div>
			<li id="comment">
				<Link to={`/users/${author}`}>By: {author}</Link>
				<Jumbotron id="commentJumbo" fluid>
					<p>{body}</p>
				</Jumbotron>
				<Voter votes={votes} comment_id={comment_id} user={user} />
				<p>
					<span role="img" aria-label="created_at">
						🗓
					</span>
					{api.convertDateFormat(created_at)}
				</p>
				{user === author && <DeleteModal handleClick={handleClick} comment_id={comment_id} />}
			</li>
		</div>
	);
};

export default CommentData;
