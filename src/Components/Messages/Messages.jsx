import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Messages.module.css';

const MessagesUser = (props) => {
	return (
		<div className={classes.dialog}>
			<NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
		</div>
	);
};

const MessageItem = (props) => {
	return <div className={classes.message}>{props.message}</div>;
};

const Messages = (props) => {
	let messageUser = [
		{ id: 0, name: 'Maye' },
		{ id: 1, name: 'Donny' },
		{ id: 2, name: 'Kristian' },
		{ id: 3, name: 'Muhammad' },
		{ id: 4, name: 'Sage' },
		{ id: 5, name: 'Adolfo' },
	];

	let messageData = [
		{
			id: 0,
			message: 'Et quidem quia dolorem autem sunt id magni at.',
		},
		{
			id: 1,
			message: 'Doloribus sequi mollitia nihil eos aut saepe.',
		},
		{ id: 2, message: 'Quis eos et.' },
		{
			id: 3,
			message: 'Tempora et deserunt consectetur odio et quaerat eum repellat.',
		},
		{
			id: 4,
			message: 'Fuga porro tempore nostrum et aliquid nesciunt facere ex.',
		},
		{
			id: 5,
			message: 'Qui ut impedit rerum error aspernatur sit deserunt accusamus quia.',
		},
	];

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				<div className={classes.dialog}>
					<MessagesUser name={messageUser[0].name} id={messageUser[0].id} />
					<MessagesUser name={messageUser[1].name} id={messageUser[1].id} />
					<MessagesUser name={messageUser[2].name} id={messageUser[2].id} />
					<MessagesUser name={messageUser[3].name} id={messageUser[3].id} />
					<MessagesUser name={messageUser[4].name} id={messageUser[4].id} />
					<MessagesUser name={messageUser[5].name} id={messageUser[5].id} />
				</div>
			</div>
			<div className={classes.messages}>
				<MessageItem id={messageData[0].id} message={messageData[0].message} />
				<MessageItem id={messageData[1].id} message={messageData[1].message} />
				<MessageItem id={messageData[2].id} message={messageData[2].message} />
				<MessageItem id={messageData[3].id} message={messageData[3].message} />
				<MessageItem id={messageData[4].id} message={messageData[4].message} />
				<MessageItem id={messageData[5].id} message={messageData[5].message} />
			</div>
		</div>
	);
};

export default Messages;
