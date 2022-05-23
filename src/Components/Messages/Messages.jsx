import React from 'react';
import { Navigate } from 'react-router';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

const Messages = (props) => {
	let state = props.messagesPage;

	let dialogsElement = state.users.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
	));
	let DialogsDates = state.messages.map((d) => (
		<Message id={d.id} message={d.message} key={d.id} />
	));
	let newMessageBody = state.newMessageBody;

	let addMessage = React.createRef();

	let sendMessageClick = () => {
		props.sendMessage();
	};

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
	};
	if (!props.isAuth) {
		return <Navigate to={'/login'} />;
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				<div className={classes.dialog}>{dialogsElement}</div>
			</div>
			<div className={classes.messages}>
				<div>{DialogsDates}</div>
				<div className={classes.messages__send}>
					<textarea
						value={newMessageBody}
						ref={addMessage}
						onChange={onNewMessageChange}
						placeholder="Enter your message"
					/>
					<div>
						<button onClick={sendMessageClick}>Отправить</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
