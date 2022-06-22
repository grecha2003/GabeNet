import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo
				savePhoto={props.savePhoto}
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
				isLoaded={props.isLoaded}
			/>
			<MyPostsContainer profile={props.profile} />
		</div>
	);
};

export default Profile;
