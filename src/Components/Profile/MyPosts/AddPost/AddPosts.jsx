import React from 'react';
import classes from './AddPosts.module.css';

const AddPosts = () => {
	return (
		<div>
			<div className={classes.post}>
				<div className={classes.post__item}>
					<img
						src='https://semantic-ui.com/images/avatar2/large/matthew.png'
						width={'45px'}
						height={'45px'}
					/>
					post1
				</div>
			</div>
		</div>
	);
};

export default AddPosts;
