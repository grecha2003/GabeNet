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
		let text = newPostElement.current.value;
		props.addPost(text);
	}

	return (
		<div>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<div>
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
