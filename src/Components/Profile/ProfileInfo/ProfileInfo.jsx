import React from 'react';
import classes from './ProfileInfo.module.css';
import Spinner from '../../common/Spinner/Spinner';
import avaImg from '../../assets/avaUsers.png';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Spinner />;
	}

	return (
		<div>
			<div>
				<img
					className={classes.img__top}
					src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/31858821/03b96bd3377b9f796689ac28f87b881b7453721a.jpg"
					width={'100%'}
					height={'240px'}
					alt="user background"
				/>
			</div>
			<div className={classes.profile__text}>
				<div>
					<img
						className={classes.img__avatar}
						src={props.profile.photos.large || avaImg}
						width={'150px'}
						height={'150px'}
						alt="user avatar"
					/>
					<ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
				</div>
				<div className={classes.profileAbout}>
					<span>{props.profile.fullName}</span>
					<span>
						<a href={props.profile.contacts.website}>
							{props.profile.contacts.website ? 'Web Site' : ''}
						</a>
					</span>
					<span>
						<a href={props.profile.contacts.vk}>{props.profile.contacts.vk ? 'VK' : ''}</a>
					</span>
					<span>
						<a href={props.profile.contacts.github}>
							{props.profile.contacts.github ? 'GitHub' : ''}
						</a>
					</span>
					<span>
						<a href={props.profile.contacts.instagram}>
							{props.profile.contacts.instagram ? 'Instagram' : ''}
						</a>
					</span>
					<span>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</span>
					<span>{props.profile.lookingForAJobDescription}</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
