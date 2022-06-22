import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileTC, getStatusTC, updateStatus, savePhoto } from '../../Redux/profileReducer';
import { useParams } from 'react-router';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
import Spinner from '../common/Spinner/Spinner';

const withRouter = (WrappedComponent) => (props) => {
	const params = useParams();
	return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends Component {
	refreshProfile() {
		let userId = this.props.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('/login');
			}
		}
		this.props.getUserProfileTC(userId);
		this.props.getStatusTC(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps) {
		if (this.props.params.userId !== prevProps.params.userId) {
			this.refreshProfile();
		}
	}

	render() {
		if (!this.props.profile) {
			return <Spinner />;
		}

		return (
			<div>
				<Profile
					{...this.props}
					isOwner={!this.props.params.userId}
					profile={this.props.profile}
					status={this.props.status}
					updateStatus={this.props.updateStatus}
					savePhoto={this.props.savePhoto}
					isLoaded={this.props.isLoaded}
				/>
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth,
	isLoaded: state.profilePage.isLoaded,
});

export default compose(
	connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatus, savePhoto }),
	withRouter,
	AuthRedirect
)(ProfileContainer);
