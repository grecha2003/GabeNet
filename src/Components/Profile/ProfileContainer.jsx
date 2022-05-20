import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileTC } from '../../Redux/profileReducer';
import { Navigate, useParams } from 'react-router';

const withRouter = WrappedComponent => props => {
	const params = useParams();
	return (
		<WrappedComponent
			{...props}
			params={params}
		/>
	);
};

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.params.userId;
		if (!userId) {
			userId = 24042;
		}
		this.props.getUserProfileTC(userId)
	}

	render() {
		if (!this.props.isAuth) {
			return <Navigate to={'/login'} />
		}

		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuth: state.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfileTC },)(WithUrlDataContainerComponent);
