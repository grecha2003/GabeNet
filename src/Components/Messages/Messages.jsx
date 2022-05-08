import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/state';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

const Messages = (props) => {
	let state = props.store.getState().MessagesPage;

	let dialogsElement = state.messageUser.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.key} />
	));
	let DialogsDates = state.messageData.map((d) => (
		<Message id={d.id} message={d.message} key={d.key} />
	));
	let newMessageBody = state.newMessageBody;

	let addMessage = React.createRef();

	let sendMessageClick = () => {
		props.store.dispatch(sendMessageCreator())
	}

	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}


	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				<div className={classes.dialog}>{dialogsElement}</div>
			</div>
			<div className={classes.messages}>
				<div>{DialogsDates}</div>
				<div className={classes.messages__send}>
					<textarea value={newMessageBody} ref={addMessage} onChange={onNewMessageChange} placeholder='Enter your message' />
					<div>
						<button onClick={sendMessageClick}>Отправить</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
