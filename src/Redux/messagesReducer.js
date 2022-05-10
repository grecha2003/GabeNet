const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
			message: 'Tempora et deserunt consectetur odio et quaerat eum repellat.',
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
	newMessageBody: '',
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messageData.push({ id: 6, message: body });
			return state;
		default:
			return state;
	}
};

export const sendMessageCreator = () => {
	return {
		type: 'SEND_MESSAGE',
	};
};
export const updateNewMessageBodyCreator = (body) => {
	return {
		type: 'UPDATE_NEW_MESSAGE_BODY',
		body: body,
	};
};

export default messagesReducer;
