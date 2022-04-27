import React from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<img
				src='https://i.pinimg.com/originals/de/1f/9c/de1f9c87bdf6c5185a95557141bc4a0d.png'
				alt='logo'
			/>
		</header>
	);
};

export default Header;
