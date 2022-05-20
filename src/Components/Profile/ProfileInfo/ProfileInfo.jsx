import React from "react";
import classes from "./ProfileInfo.module.css";
import Spinner from "../../common/Spinner/Spinner";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Spinner />;
	}

	return (
		<div>
			<div>
				<img
					className={classes.img__top}
					src="https://kartinkin.net/uploads/posts/2021-07/1625635272_4-kartinkin-com-p-estetichnie-foni-minimalizm-krasivie-foni-5.jpg"
					width={"100%"}
					height={"240px"}
					alt="user background"
				/>
			</div>
			<div className={classes.profile__text}>
				<div>
					<img
						className={classes.img__avatar}
						src={props.profile.photos.large}
						width={"150px"}
						height={"150px"}
						alt="user avatar"
					/>
				</div>
				<div className={classes.profileAbout}>
					<span>{props.profile.fullName}</span>
					<span>
						<a href={props.profile.contacts.website}>
							{props.profile.contacts.website ? "Web Site" : ""}
						</a>
					</span>
					<span>
						<a href={props.profile.contacts.vk}>
							{props.profile.contacts.vk ? "VK" : ""}
						</a>
					</span>
					<span>
						<a href={props.profile.contacts.github}>
							{props.profile.contacts.github ? "GitHub" : ""}
						</a>
					</span>
					<span>
						<a href={props.profile.contacts.instagram}>
							{props.profile.contacts.instagram ? "Instagram" : ""}
						</a>
					</span>
					<span>
						Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
					</span>
					<span>{props.profile.lookingForAJobDescription}</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
