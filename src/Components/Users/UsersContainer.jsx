import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {
	follow, setCurrentPage, unfollow,
	toggleFollowingProgress, getUsersThunkCreator
} from '../../Redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.Spinner ? <Spinner /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress} />
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		Spinner: state.usersPage.Spinner,
		followingInProgress: state.usersPage.followingInProgress
	}
}

export default compose(
	AuthRedirect,
	connect(mapStateToProps, {
		follow, unfollow, setCurrentPage,
		toggleFollowingProgress, getUsersThunkCreator
	})
)(UsersContainer)
