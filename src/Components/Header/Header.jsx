import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../assets/logo.png';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src={logo} alt="logo" />
			<div className={classes.authBlock}>
				{props.isAuth ? (
					<div>
						{props.login} <button onClick={props.logout}>Log out</button>
					</div>
				) : (
					<NavLink to={'/login'} className={classes.authText}>
						Login
					</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
