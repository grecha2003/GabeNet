import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import classes from './Paginator.module.scss';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	let active = 1;
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;

	return (
		<div className={`${classes.pagiNumber}`}>
			<Pagination size="lm">
				{portionNumber > 1 && (
					<Pagination.First
						className={classes.paginationItem}
						onClick={() => {
							setPortionNumber(portionNumber - 1);
						}}
					/>
				)}
				{currentPage >= 2 && (
					<Pagination.Prev
						className={classes.paginationItem}
						activeLabel={currentPage}
						onClick={() => {
							currentPage - 1 > 0 && onPageChanged(currentPage - 1);
							if (currentPage <= leftPortionPageNumber) {
								setPortionNumber(portionNumber - 1);
							}
						}}
					/>
				)}
				{pages
					.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map((p) => {
						return (
							<Pagination.Item
								className={classes.paginationItem}
								active={p === currentPage}
								activeLabel={active}
								key={p}
								onClick={() => {
									onPageChanged(p);
								}}
							>
								<div className={classes.pageLink}>{p}</div>
							</Pagination.Item>
						);
					})}
				{portionCount > currentPage && (
					<Pagination.Next
						className={classes.paginationItem}
						onClick={() => {
							currentPage + 1 > 0 && onPageChanged(currentPage + 1);
							if (currentPage >= rightPortionPageNumber) {
								setPortionNumber(portionNumber + 1);
							}
						}}
					/>
				)}
				{portionCount > portionNumber && (
					<Pagination.Last
						className={classes.paginationItem}
						onClick={() => {
							setPortionNumber(portionNumber + 1);
						}}
					/>
				)}
			</Pagination>
		</div>
	);
};

export default Paginator;
