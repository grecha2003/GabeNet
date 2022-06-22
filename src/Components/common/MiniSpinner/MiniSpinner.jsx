import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import classes from './MiniSpinner.module.scss';

const MiniSpinner = () => {
	return (
		<div style={{ display: 'block' }}>
			<Spinner className={classes.miniSpinner} animation="border" role="status">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	);
};

export default MiniSpinner;
