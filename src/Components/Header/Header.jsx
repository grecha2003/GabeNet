import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isAuth, login, logout }) => {
	return (
		<header className={classes.header}>
			<img src={logo} alt="logo" />
			<div className={classes.authBlock}>
				{isAuth ? (
					<div>
						{login}{' '}
						<button className={classes.btnLogout} onClick={logout}>
							Log out
							<FontAwesomeIcon icon={faArrowRightFromBracket} />
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
