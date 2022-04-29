import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

const Messages = (props) => {
	let messageUser = [
		{ id: 0, name: 'Maye', key: 0 },
		{ id: 1, name: 'Donny', key: 1 },
		{ id: 2, name: 'Kristian', key: 2 },
		{ id: 3, name: 'Muhammad', key: 3 },
		{ id: 4, name: 'Sage', key: 4 },
		{ id: 5, name: 'Adolfo', key: 5 },
	];

	let dialogsElement = messageUser.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.key} />
	));

	let messageData = [
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
	];

	let DialogsDates = messageData.map((d) => (
		<Message id={d.id} message={d.message} key={d.key} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				<div className={classes.dialog}>{dialogsElement}</div>
			</div>
			<div className={classes.messages}>{DialogsDates}</div>
		</div>
	);
};

export default Messages;
