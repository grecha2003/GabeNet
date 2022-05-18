import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '52ea916f-a0f7-4263-b986-4c315298411f',
	},
});

export const usersAPI = {
	async getUsers(currentPage = 1, pageSize = 10) {
		const response = await instance.get(
			`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
		);
		return response.data;
	},
};
