import React from 'react';
import Header from '../../partials/Header/Header';
import { Link } from '@reach/router';
import * as api from '../../api';
import Voter from '../../Voter/Voter';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './ArticleData.css';

const ArticleData = ({ title, topic, author, body, votes, created_at, comment_count, article_id, user }) => {
	return (
		<div>
			<Header route={'Article'} />
			<h2>{title[0].toUpperCase() + title.slice(1)}</h2>
			<ul>
				<li>
					<Link to={`/explore/${topic}`}>Topic: {topic}</Link>
					<br />
					<Link to={`/users/${author}`}>By: {author}</Link>
					<Jumbotron id="articleJumbo" fluid>
						<p>{body}</p>
					</Jumbotron>
					<Voter votes={votes} article_id={article_id} user={user} />
					<p>
						<span role="img" aria-label="created_at">
							🗓
						</span>
						{api.convertDateFormat(created_at)}
					</p>
					<p>
						<i className="fa fa-comments-o fa-2x" aria-hidden="true" /> {comment_count}
					</p>
				</li>
			</ul>
		</div>
	);
};

export default ArticleData;
