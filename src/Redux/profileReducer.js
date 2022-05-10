const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
	myPostData: [
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
	newPostText: '',
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				message: state.newPostText,
				LikesCount: 0,
			};
			state.myPostData.push(newPost);
			state.newPostText = '';
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return state;
		default:
			return state;
	}
};

export const addPostActionCreator = () => {
	return {
		type: 'ADD-POST',
	};
};
export const updateNewPostTextActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT',
		newText: text,
	};
};

export default profileReducer;
