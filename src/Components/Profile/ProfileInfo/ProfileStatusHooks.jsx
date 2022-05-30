import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	const activateEditMod = () => {
		setEditMode(true);
	};

	const deactivateEditMod = () => {
		setEditMode(false);
		props.updateStatus(status);
	};

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<div>
			{!editMode && (
				<div>
					<span onDoubleClick={activateEditMod}>{props.status || 'No status'}</span>
				</div>
			)}
			{editMode && (
				<div>
					<input
						onChange={onStatusChange}
						value={status}
						autoFocus={true}
						onBlur={deactivateEditMod}
					/>
				</div>
			)}
		</div>
	);
};

export default ProfileStatusHooks;
