import React, { Component } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileTC } from '../../Redux/profileReducer';
import { useParams } from 'react-router';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

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
			userId = 2;
		}
		this.props.getUserProfileTC(userId)
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile} />
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
});

export default compose(
	connect(mapStateToProps, { getUserProfileTC }),
	withRouter,
	AuthRedirect
)(ProfileContainer)
