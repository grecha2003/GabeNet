import React, { Component } from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends Component {
	state = {
		editMode: false,
		status: this.props.status,
	};

	activEditMod = () => {
		this.setState({
			editMode: true,
		});
	};
	deactivEditMod = () => {
		this.setState({
			editMode: false,
		});
		this.props.updateStatus(this.state.status);
	};
	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		});
	};

	render() {
		return (
			<div>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick={this.activEditMod}>{this.props.status || 'No status'}</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input
							onChange={this.onStatusChange}
							autoFocus={true}
							onBlur={this.deactivEditMod}
							value={this.state.status}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
