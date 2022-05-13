import React from 'react';
import avatarImg from '../../Components/assets/ava.png'
import classes from './Users.module.css'

const Users = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 0,
				key: 0,
				avatarImg: '../../src/Components/assets/ava.png',
				followed: true,
				name: 'Maye',
				status: 'rem-sint-odit',
				location: { state: 'Russia', city: 'Moscow' },
			},
			{
				id: 1,
				key: 1,
				avatarImg: '../../src/Components/assets/ava.png',
				followed: false,
				name: 'Donny',
				status: 'sint-corrupti-voluptatibus',
				location: { state: 'Russia', city: 'Sevastopol' },
			},
			{
				id: 2,
				key: 2,
				avatarImg: '../../src/Components/assets/ava.png',
				followed: true,
				name: 'Kristian',
				status: 'qui-qui-vel',
				location: { state: 'Ukraine', city: 'Kiev' },
			},
			{
				id: 3,
				key: 3,
				avatarImg: '../../src/Components/assets/ava.png',
				followed: false,
				name: 'Muhammad',
				status: 'est-laudantium-omnis',
				location: { state: 'Israel', city: 'Haifa' },
			},
			{
				id: 4,
				key: 4,
				avatarImg: '../../src/Components/assets/ava.png',
				followed: true,
				name: 'Sage',
				status: 'et reiciendis ea',
				location: { state: 'Belarus', city: 'Minsk' },
			},
			{
				id: 5,
				key: 5,
				avatarImg: '../../src/Components/assets/ava.png',
				followed: false,
				name: 'Adolfo',
				status: 'excepturi cum atque',
				location: { state: 'Kanada', city: 'Toronto' },
			}
		])
	}

	return (
		<div>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={avatarImg} className={classes.avatarImg} />
						</div>
						<div>
							{u.followed
								? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { props.follow(u.id) }}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.city}</div>
							<div>{u.location.state}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	);
};

export default Users;