import React from 'react';
import Header from '../Header/Header';
import {Link} from '@reach/router'
import * as api from '../api'

const ArticleData = ({title,topic,author,body,votes,created_at,comment_count}) => {
	return (
		<>
      <Header route={'Article'}></Header>
      <h2>{title[0].toUpperCase()+ title.slice(1)}</h2>
			<ul>
				<li>
					<Link to={`/explore/${topic}`}>Topic: {topic}</Link>
          <br/>
					<Link to={`/users/${author}`}>By: {author}</Link>
					<article>
						<p>{body}</p>
					</article>
					<p>Votes: {votes}</p>
					<p>Created at: {api.convertDateFormat(created_at)}</p>
					<p>Comment Cout: {comment_count}</p>
				</li>
			</ul>
		</>
	);
};

export default ArticleData;
