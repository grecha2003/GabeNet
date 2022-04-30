import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import classes from './Messages.module.css';

const Messages = (props) => {
	let dialogsElement = props.state.messageUser.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.key} />
	));

	let DialogsDates = props.state.messageData.map((d) => (
		<Message id={d.id} message={d.message} key={d.key} />
	));

	let addMessage = React.createRef();

	let sendMessage = () => {
		let text = addMessage.current.value;
		alert(text)
	}


	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				<div className={classes.dialog}>{dialogsElement}</div>
			</div>
			<div className={classes.messages}>{DialogsDates}
				<div>
					<textarea ref={addMessage}>
					</textarea>
					<div>
						<button onClick={sendMessage}>Отправить</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messages;
