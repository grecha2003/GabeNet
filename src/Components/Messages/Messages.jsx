import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import classes from './Messages.module.scss';
import { Formik, Form, Field } from 'formik';

const AddEnterMessages = ({ sendMessage }) => {
	let addNewMessage = (values) => {
		sendMessage(values);
	};

	return (
		<Formik
			initialValues={{
				newMessageBody: '',
			}}
			onSubmit={(values, { resetForm }) => {
				addNewMessage(values.newMessageBody);
				resetForm({ values: '' });
				console.log(values);
			}}
		>
			<Form>
				<div className={classes.messages__send}>
					<Field as={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'} />
					<div>
						<button type={'submit'} className={classes.btnSend}>
							^ω^ Send ^ω^
						</button>
					</div>
				</div>
			</Form>
		</Formik>
	);
};

const Messages = ({ messagesPage, sendMessage }) => {
	let state = messagesPage;

	let dialogsElement = state.users.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
	));
	let DialogsDates = state.messages.map((d) => (
		<Message id={d.id} message={d.message} key={d.id} />
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogs__items}>
				<div className={classes.dialog}>{dialogsElement}</div>
			</div>
			<div className={classes.messages}>
				<div>{DialogsDates}</div>
				<AddEnterMessages sendMessage={sendMessage} />
			</div>
		</div>
	);
};

export default Messages;
