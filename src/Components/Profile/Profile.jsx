import React from 'react';
import MyPost from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.content}>
			<div>
				<img
					className={classes.img__top}
					src='https://kartinkin.net/uploads/posts/2021-07/1625635272_4-kartinkin-com-p-estetichnie-foni-minimalizm-krasivie-foni-5.jpg'
					width={'100%'}
					height={'240px'}
					alt='user background'
				/>
			</div>
			<div>
				<img
					className={classes.img__avatar}
					src='https://semantic-ui.com/images/avatar2/large/matthew.png'
					width={'150px'}
					height={'150px'}
					alt='user avatar'
				/>
			</div>
			<MyPost />
		</div>
	);
};

export default Profile;
