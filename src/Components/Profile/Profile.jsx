import React from 'react';
import MyPost from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPost myPostData={props.profilePage.myPostData} newPostText={props.profilePage.newPostText} dispatch={props.dispatch} />
		</div>
	);
};

export default Profile;
