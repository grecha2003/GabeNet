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
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
			return response.data;
		});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`);
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`);
	},
};

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status });
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append('image', photoFile);

		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});
	},
};

export const authAPI = {
	getMe() {
		return instance.get(`auth/me`, {});
	},
	login(email, password, rememberMe = false) {
		return instance.post(`auth/login`, { email, password, rememberMe });
	},
	logout() {
		return instance.delete(`auth/login`);
	},
};
