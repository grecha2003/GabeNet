import React from 'react';
import AddPosts from './AddPost/AddPosts';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
	let postsElement = props.posts.map((p) => (
		<AddPosts
			id={p.id}
			message={p.message}
			LikesCount={p.LikesCount}
			key={p.key}
		/>
	));

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostCnange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div>
			<div className={classes.posts}>
				<div className={classes.write__post}>
					<textarea onChange={onPostCnange} ref={newPostElement} value={props.newPostText} placeholder='Enter your post' />
				</div>
				<div className={classes.write__btn}>
					<button
						onClick={onAddPost}>
						Add post
					</button>
				</div>
			</div>
			{postsElement}
		</div>
	);
};

export default MyPosts;
