import React from 'react';
import { NavLink } from 'react-router-dom';
import avaUsers from '../../Components/assets/avaUsers.png';
import classes from './Users.module.css';

const Users = ({
	totalUsersCount,
	pageSize,
	onPageChanged,
	currentPage,
	users,
	followingInProgress,
	follow,
	unfollow,
}) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
		if (i === 8) break;
	}
	return (
		<>
			<div className={classes.usersGrid}>
				{users.map((user) => (
					<div className={classes.userCard} key={user.id}>
						<span style={{ textAlign: 'center' }}>
							<div className={classes.user}>
								<NavLink style={{ textDecoration: 'none' }} to={'/profile/' + user.id}>
									<img
										src={user.photos.small != null ? user.photos.small : avaUsers}
										className={classes.avatarImg}
										alt="user_avatar"
									/>
									<div className={classes.userInfo}>{user.name}</div>
								</NavLink>
							</div>
							<div>
								{user.followed ? (
									<button
										className={`${classes.bn632Hover} ${classes.bn27}`}
										disabled={followingInProgress.some((id) => id === user.id)}
										onClick={() => {
											unfollow(user.id);
										}}
									>
										UNFOLLOW
									</button>
								) : (
									<button
										className={`${classes.bn632Hover} ${classes.bn27}`}
										disabled={followingInProgress.some((id) => id === user.id)}
										onClick={() => {
											follow(user.id);
										}}
									>
										FOLLOW
									</button>
								)}
							</div>
						</span>
						<span>
							<span>
								<div>{user.status}</div>
							</span>
							<span>
								<div>{'users.location.city'}</div>
								<div>{'users.location.state'}</div>
							</span>
						</span>
					</div>
				))}
			</div>
			<div className={classes.pagiNamber}>
				{pages.map((p) => {
					return (
						<span
							onClick={() => {
								onPageChanged(p);
							}}
							className={currentPage === p ? classes.selectedPage : currentPage}
						>
							{p}
						</span>
					);
				})}
			</div>
		</>
	);
};

export default Users;
