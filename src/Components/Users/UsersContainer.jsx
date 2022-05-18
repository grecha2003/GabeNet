import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, setCurrentPage, setSpinnerToggle, setTotalUsersCount, setUsers, unfollow } from '../../Redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';
import { usersAPI } from '../../api/api';

class UsersContainer extends Component {
	componentDidMount() {
		this.props.setSpinnerToggle(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.setSpinnerToggle(false);
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.setSpinnerToggle(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.setSpinnerToggle(false);
			this.props.setUsers(data.items)
		});
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
				unfollow={this.props.unfollow} />
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		Spinner: state.usersPage.Spinner
	}
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setSpinnerToggle })(UsersContainer);