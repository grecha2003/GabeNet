import React from 'react';
import classes from './AddPosts.module.css';
import avaImg from '../../../assets/ava.png'

const AddPosts = (props) => {
	return (
		<div>
			<div className={classes.post}>
				<div className={classes.post__item}>
					<img
						src={avaImg}
						width={'45px'}
						height={'45px'}
						alt='post avatar'
					/>
					<div className={classes.post__text}>{props.message}</div>
				</div>
				<div className={classes.post__ptext}>
					<span>like: {props.LikesCount}</span>
				</div>
			</div>
		</div>
	);
};

export default AddPosts;
