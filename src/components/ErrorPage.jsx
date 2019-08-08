import React from 'react';
import Header from './Header/Header';

const ErrorPage = ({ msg, status }) => {
	return (
		<div>
			<Header route={'Error'} />
			<p>
				<em>Oops! You landed on an Error!</em>
			</p>
			{msg && (
				<p>
					<em>Status: {status}</em>
				</p>
			)}
			{status && (
				<p>
					<em>{msg}...</em>
				</p>
			)}
		</div>
	);
};

export default ErrorPage;
