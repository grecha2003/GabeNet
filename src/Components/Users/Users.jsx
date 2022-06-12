import React from 'react';
import { NavLink } from 'react-router-dom';
import avaUsers from '../../Components/assets/avaUsers.png';
import Paginator from '../common/Spinner/Paginator/Paginator';
import classes from './Users.module.scss';

const Users = ({
	currentPage,
	onPageChanged,
	totalItemsCount,
	pageSize,
	users,
	followingInProgress,
	follow,
	unfollow,
}) => {
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
			<div>
				<Paginator
					currentPage={currentPage}
					onPageChanged={onPageChanged}
					totalItemsCount={totalItemsCount}
					pageSize={pageSize}
				/>
			</div>
		</>
	);
};

export default Users;
