import React from 'react';
import AddPosts from './AddPost/AddPosts';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
	let postsElement = props.myPostData.map((p) => (
		<AddPosts
			id={p.id}
			message={p.message}
			LikesCount={p.LikesCount}
			key={p.key}
		/>
	));

	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	}

	let onPostCnange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div>
			<h3>My posts</h3>
			<div className={classes.posts}>
				<div className={classes.write__post}>
					<textarea onChange={onPostCnange} ref={newPostElement} value={props.newPostText} />
				</div>
				<div className={classes.write__btn}>
					<button
						onClick={addPost}>
						Add post
					</button>
				</div>
			</div>
			{postsElement}
		</div>
	);
};

export default MyPosts;
