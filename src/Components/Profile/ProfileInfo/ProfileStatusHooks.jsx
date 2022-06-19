import React, { useEffect, useState } from 'react';

const ProfileStatusHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

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
				<div style={{ display: 'block', width: '150px' }}>
					<span style={{ width: '150px' }} onDoubleClick={activateEditMod}>
						{props.status || 'No status'}
					</span>
				</div>
			)}
			{editMode && (
				<div style={{ display: 'block', width: '150px', height: '0 auto' }}>
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
