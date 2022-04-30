import React from 'react';
import MyPost from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPost myPostData={props.state.myPostData} addPost={props.addPost} />
		</div>
	);
};

export default Profile;
