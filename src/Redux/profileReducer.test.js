import profileReducer, { addPostActionCreator, deletedPost } from './profileReducer';

let state = {
	posts: [
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
	],
};

it('new post should be added', () => {
	// 1. test data
	let action = addPostActionCreator('new post');

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.posts.length).toBe(4);
	expect(newState.posts[3].message).toBe('new post');
});

it('message of new post should be correct', () => {
	// 1. test data
	let action = addPostActionCreator('new post');

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation

	expect(newState.posts[3].message).toBe('new post');
});

it('after deleting length of messenges should be decrement', () => {
	// 1. test data
	let action = deletedPost(1);

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.posts.length).toBe(2);
});
