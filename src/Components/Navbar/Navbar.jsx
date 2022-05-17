import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.nav__item}>
				<NavLink to='/profile'>Profile</NavLink>
			</div>
			<div className={classes.nav__item}>
				<NavLink to='/messages'>Messages</NavLink>
			</div>
			<div className={classes.nav__item}>
				<NavLink to='/users'>Users</NavLink>
			</div>
			<div className={classes.nav__item}>
				<NavLink to='#/'>News</NavLink>
			</div>
			<div className={classes.nav__item}>
				<NavLink to='#/'>Music</NavLink>
			</div>
			<div className={classes.nav__item}>
				<NavLink to='#/'>Settings</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
