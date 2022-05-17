import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users';
import { follow, setCurrentPage, setSpinnerToggle, setTotalUsersCount, setUsers, unfollow } from '../../Redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';

class UsersContainer extends Component {
	componentDidMount() {
		this.props.setSpinnerToggle(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setSpinnerToggle(false);
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setSpinnerToggle(true);
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setSpinnerToggle(false);
				this.props.setUsers(response.data.items)
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