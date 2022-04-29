import React from 'react';
import AddPosts from './AddPost/AddPosts';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
	let myPostData = [
		{
			id: 0,
			message: 'Hic vitae hic dolorem possimus non incidunt deleniti ut.',
			LikesCount: 19,
			key: 0,
		},
		{
			id: 1,
			message: `Laudantium quas tempore.Voluptatibus sit necessitatibus quisquam itaque iure rem.
								Laborum est et recusandae voluptatum.
								Et dolores dolore qui reiciendis.`,
			LikesCount: 20,
			key: 1,
		},
		{
			id: 2,
			message:
				'Aut reprehenderit architecto eum in. Est ad doloribus iusto qui modi repudiandae dolores quia veritatis. Consequuntur quia est voluptates officia impedit et totam. Iusto nam dolore tenetur et incidunt rerum eos doloribus. Voluptas nihil blanditiis.',
			LikesCount: 23,
			key: 2,
		},
	];

	let postsElement = myPostData.map((p) => (
		<AddPosts
			id={p.id}
			message={p.message}
			LikesCount={p.LikesCount}
			key={p.key}
		/>
	));

	return (
		<div>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			{postsElement}
		</div>
	);
};

export default MyPosts;
