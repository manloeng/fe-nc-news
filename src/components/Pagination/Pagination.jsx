import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Pagination.css';
import * as api from '../api';

class Pagination extends Component {
	state = {
		maxPage: Infinity,
		currentPage: 1
	};

	componentDidMount() {
		const { total_count, articles } = this.props.articleListData;
		const maxPage = Math.ceil(total_count / articles.length);
		this.setState({ maxPage });
	}

	updatePageCount = (pageCount) => {
		this.setState(({ maxPage, currentPage }) => {
			return { maxPage, currentPage: currentPage + pageCount };
		});
	};

	componentDidUpdate(prevProps, prevState) {
		const { currentPage } = this.state;
		const { updateViaPagination } = this.props;
		if (prevState.currentPage !== currentPage) {
			api.getArticleData({ p: currentPage }).then((data) => {
				updateViaPagination(data);
			});
		}
	}

	render() {
		const { maxPage, currentPage } = this.state;
		return (
			<div className="pagination">
				<Button
					onClick={() => {
						this.updatePageCount(-1);
					}}
					disabled={currentPage === 1}
				>
					prev
				</Button>
				<p>
					{currentPage} of {maxPage}
				</p>
				<Button
					onClick={() => {
						this.updatePageCount(1);
					}}
					disabled={currentPage === maxPage}
				>
					next
				</Button>
			</div>
		);
	}
}

export default Pagination;
