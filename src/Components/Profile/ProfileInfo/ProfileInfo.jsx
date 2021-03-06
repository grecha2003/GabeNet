import React from 'react';
import classes from './ProfileInfo.module.scss';
import Spinner from '../../common/Spinner/Spinner';
import avaImg from '../../assets/avaUsers.png';
import ProfileStatusHooks from './ProfileStatusHooks';
import MiniSpinner from '../../common/MiniSpinner/MiniSpinner';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, isLoaded }) => {
	if (!profile) {
		return <Spinner />;
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	};

	const setMiniSpinner = () => {
		if (isLoaded === true) {
			return <MiniSpinner />;
		}
	};

	return (
		<div>
			<div>
				<img
					className={classes.img__top}
					src="https://kartinkin.net/uploads/posts/2021-07/1625635272_4-kartinkin-com-p-estetichnie-foni-minimalizm-krasivie-foni-5.jpg"
					width={'100%'}
					height={'240px'}
					alt="user background"
				/>
			</div>
			<div className={classes.profile__text}>
				<div>
					<div className={classes.moduleFiles} style={{ position: 'relative' }}>
						{setMiniSpinner()}
						<img
							className={classes.img__avatar}
							src={profile.photos.large || avaImg}
							width={'150px'}
							height={'150px'}
							alt="user avatar"
						/>
						{isOwner && (
							<input
								type="file"
								id="updateAva"
								onChange={onMainPhotoSelected}
								className={classes.inputFile}
							/>
						)}
						{isOwner && (
							<label htmlFor="updateAva" className={classes.labelFile}>
								Update avatar
							</label>
						)}
					</div>
					<ProfileStatusHooks status={status} updateStatus={updateStatus} />
				</div>
				<div className={classes.profileAbout}>
					<span>{profile.fullName}</span>
					<span>
						<a href={profile.contacts.website}>{profile.contacts.website ? 'Web Site' : ''}</a>
					</span>
					<span>
						<a href={profile.contacts.vk}>{profile.contacts.vk ? 'VK' : ''}</a>
					</span>
					<span>
						<a href={profile.contacts.github}>{profile.contacts.github ? 'GitHub' : ''}</a>
					</span>
					<span>
						<a href={profile.contacts.instagram}>{profile.contacts.instagram ? 'Instagram' : ''}</a>
					</span>
					<span>Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}</span>
					<span>{profile.lookingForAJobDescription}</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
