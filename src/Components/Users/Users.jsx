import React, { Component } from 'react';
import avatarImg from '../../Components/assets/ava.png'
import classes from './Users.module.css'
import axios from 'axios';

class Users extends Component {
	componentDidMount() {
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			this.props.setUsers(response.data.items)
		});
	}

	render() {
		return (<div>
			{
				this.props.users.map(users => <div key={users.id}>
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
			}
		</div>);
	}
}

export default Users;