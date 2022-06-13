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
				{pages
					.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map((p) => {
						return (
							<Pagination.Item
								className={classes.paginationItem}
								key={p}
								active={p === active}
								onClick={() => {
									onPageChanged(p);
								}}
							>
								<div className={classes.pageLink}>{p}</div>
							</Pagination.Item>
						);
					})}
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
