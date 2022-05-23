import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileTC, getStatusTC, updateStatus } from '../../Redux/profileReducer';
import { useParams } from 'react-router';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

const withRouter = (WrappedComponent) => (props) => {
	const params = useParams();
	return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.params.userId;
		if (!userId) {
			userId = 24042;
		}
		this.props.getUserProfileTC(userId);
		this.props.getStatusTC(userId);
	}

	render() {
		return (
			<div>
				<Profile
					{...this.props}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateStatus}
				/>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
});

export default compose(
	connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatus }),
	withRouter,
	AuthRedirect
)(ProfileContainer);
