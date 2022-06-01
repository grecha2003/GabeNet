import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Messages.module.css';

const DialogItem = ({ id, name }) => {
	return (
		<div className={classes.dialog}>
			<NavLink to={'/messages/' + id}>{name}</NavLink>
		</div>
	);
};

export default DialogItem;
