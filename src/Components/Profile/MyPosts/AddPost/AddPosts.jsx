import React from 'react';
import classes from './AddPosts.module.scss';
import avaImg from '../../../assets/avaUsers.png';

const AddPosts = ({ message, LikesCount, profile }) => {
	return (
		<div className={classes.posts}>
			<div className={classes.post}>
				<div className={classes.post__item}>
					<img
						src={profile.photos.large || avaImg}
						width={'45px'}
						height={'45px'}
						alt="post avatar"
					/>
					<div className={classes.post__text}>{message}</div>
				</div>
				<div className={classes.post__ptext}>
					<span>like: {LikesCount}</span>
				</div>
			</div>
		</div>
	);
};

export default AddPosts;
