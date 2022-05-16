import React, { Component } from 'react';
import avatarImg from '../../Components/assets/ava.png'
import classes from './Users.module.css'
import axios from 'axios';

class Users extends Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			});
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
			if (i === 20) break;
		}

		return (
			<div>
				<div>
					{pages.map(p => {
						return <span onClick={() => { this.onPageChanged(p) }}
							className={this.props.currentPage === p && classes.selectedPage}>{p}</span>
					})}
				</div>{
					this.props.users.map(users =>
						<div key={users.id}>
							<span>
								<div>
									<img src={users.photos.small != null ? users.photos.small : avatarImg} className={classes.avatarImg} alt='user_avatar' />
								</div>
								<div>
									{users.followed
										? <button onClick={() => { this.props.unfollow(users.id) }}>Unfollow</button>
										: <button onClick={() => { this.props.follow(users.id) }}>Follow</button>}
								</div>
							</span>
							<span>
								<span>
									<div>{users.name}</div>
									<div>{users.status}</div>
								</span>
								<span>
									<div>{'users.location.city'}</div>
									<div>{'users.location.state'}</div>
								</span>
							</span>
						</div>)
				}</div>);
	}
}

export default Users;