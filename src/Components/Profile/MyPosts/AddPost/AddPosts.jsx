import React from 'react';
import classes from './AddPosts.module.scss';
import avaImg from '../../../assets/ava.png';

const AddPosts = ({ message, LikesCount }) => {
	return (
		<div className={classes.posts}>
			<div className={classes.post}>
				<div className={classes.post__item}>
					<img src={avaImg} width={'45px'} height={'45px'} alt="post avatar" />
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
