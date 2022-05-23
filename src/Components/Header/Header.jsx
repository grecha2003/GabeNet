import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img
				src="https://i.pinimg.com/originals/de/1f/9c/de1f9c87bdf6c5185a95557141bc4a0d.png"
				alt="logo"
			/>
			<div className={classes.authBlock}>
				{props.isAuth ? (
					props.login
				) : (
					<NavLink to={'/login'} className={classes.authText}>
						Log In
					</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
