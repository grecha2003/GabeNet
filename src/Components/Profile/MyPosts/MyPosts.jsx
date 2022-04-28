import React from 'react';
import AddPosts from './AddPost/AddPosts';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
	let myPostData = [
		{ id: 0, message: 'Hic vitae hic dolorem possimus non incidunt deleniti ut.', LikesCount: 19 },
		{
			id: 1,
			message: `Laudantium quas tempore.Voluptatibus sit necessitatibus quisquam itaque iure rem.
								Laborum est et recusandae voluptatum.
								Et dolores dolore qui reiciendis.`,
			LikesCount: 20,
		},
		{
			id: 2,
			message:
				'Aut reprehenderit architecto eum in. Est ad doloribus iusto qui modi repudiandae dolores quia veritatis. Consequuntur quia est voluptates officia impedit et totam. Iusto nam dolore tenetur et incidunt rerum eos doloribus. Voluptas nihil blanditiis.',
			LikesCount: 23,
		},
	];

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
			<AddPosts id={myPostData[0].id} message={myPostData[0].message} LikesCount={myPostData[0].LikesCount} />
			<AddPosts id={myPostData[1].id} message={myPostData[1].message} LikesCount={myPostData[1].LikesCount} />
			<AddPosts is={myPostData[2].id} message={myPostData[2].message} LikesCount={myPostData[2].LikesCount} />
		</div>
	);
};

export default MyPosts;
