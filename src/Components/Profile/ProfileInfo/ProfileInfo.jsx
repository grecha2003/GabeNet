import React from 'react';
import classes from './ProfileInfo.module.css';
import Spinner from '../../common/Spinner/Spinner';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Spinner />
	}

	return (
		<div>
			<div>
				<img
					className={classes.img__top}
					src='https://kartinkin.net/uploads/posts/2021-07/1625635272_4-kartinkin-com-p-estetichnie-foni-minimalizm-krasivie-foni-5.jpg'
					width={'100%'}
					height={'240px'}
					alt='user background'
				/>
			</div>
			<div className={classes.profile__text}>
				<div>
					<img
						className={classes.img__avatar}
						src={props.profile.photos.large}
						width={'150px'}
						height={'150px'}
						alt='user avatar'
					/>
				</div>
				<div>text</div>
			</div>
		</div >
	);
};

export default ProfileInfo;
