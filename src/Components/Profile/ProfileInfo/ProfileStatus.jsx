import React, { Component } from 'react'
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends Component {
	state = {
		editMode: false,
		textStarus: 'gg'
	}

	activEditMod = () => {
		this.setState({
			editMode: true
		})
	}
	deactivEditMod = () => {
		this.setState({
			editMode: false
		})
	}

	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span onDoubleClick={this.activEditMod}>{this.props.status}</span>
					</div>
				}
				{
					this.state.editMode &&
					<div>
						<input autoFocus={true} onBlur={this.deactivEditMod} value={this.props.status}></input>
					</div>
				}
			</div >
		)
	}
}

export default ProfileStatus
