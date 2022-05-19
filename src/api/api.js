import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '52ea916f-a0f7-4263-b986-4c315298411f',
	},
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
			)
			.then((response) => {
				return response.data;
			});
	},

	follow(userId) {
		return instance.post(
			`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
		);
	},

	unfollow(userId) {
		return instance.delete(
			`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
		);
	},
};
