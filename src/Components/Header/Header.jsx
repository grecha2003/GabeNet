import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';
import logo from '../assets/logo.png';

const Header = ({ isAuth, login, logout }) => {
	return (
		<header className={classes.header}>
			<img src={logo} alt="logo" />
			<div className={classes.authBlock}>
				{isAuth ? (
					<div>
						{login}{' '}
						<button className={classes.btnLogout} onClick={logout}>
							Logout
						</button>
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
