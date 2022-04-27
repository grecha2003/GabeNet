import React from 'react';
import AddPosts from './AddPost/AddPosts';
import classes from './MyPosts.module.css';

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
				<button>Remove</button>
			</div>
			<AddPosts />
		</div>
	);
};

export default MyPosts;
