import React from 'react';
import classes from '../Messages.module.scss';

const Message = ({ message }) => {
	return <div className={classes.message}>{message}</div>;
};

export default Message;
