let store = {
	_state: {
		profilePage: {
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
		},
		MessagesPage: {
			messageUser: [
				{ id: 0, name: 'Maye', key: 0 },
				{ id: 1, name: 'Donny', key: 1 },
				{ id: 2, name: 'Kristian', key: 2 },
				{ id: 3, name: 'Muhammad', key: 3 },
				{ id: 4, name: 'Sage', key: 4 },
				{ id: 5, name: 'Adolfo', key: 5 },
			],
			messageData: [
				{
					id: 0,
					message: 'Et quidem quia dolorem autem sunt id magni at.',
					key: 0,
				},
				{
					id: 1,
					message: 'Doloribus sequi mollitia nihil eos aut saepe.',
					key: 1,
				},
				{ id: 2, message: 'Quis eos et.', key: 2 },
				{
					id: 3,
					message:
						'Tempora et deserunt consectetur odio et quaerat eum repellat.',
					key: 3,
				},
				{
					id: 4,
					message: 'Fuga porro tempore nostrum et aliquid nesciunt facere ex.',
					key: 4,
				},
				{
					id: 5,
					message:
						'Qui ut impedit rerum error aspernatur sit deserunt accusamus quia.',
					key: 5,
				},
			],
		},
	},
	_callSubscriber() {
		console.log('state changed');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 4,
				message: this._state.profilePage.newPostText,
				LikesCount: 0,
			};
			this._state.profilePage.myPostData.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	},
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

export default store;
window.store = store;
