import React from 'react';
import SpinnerImg from '../../assets/spinner.svg';
import classes from './Spinner.module.scss';

const Spinner = () => {
	return (
		<div className={classes.spinner}>
			<img src={SpinnerImg} alt="" />
		</div>
	);
};

export default Spinner;
