import React from 'react';

const ErrorPage = ({ msg, status }) => {
	return (
		<div>
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
