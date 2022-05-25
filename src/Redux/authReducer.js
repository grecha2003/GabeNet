import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	Spinner: true,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
				isAuth: true,
			};
		}
		default:
			return state;
	}
};

export const setUserData = (id, email, login, isAuth) => {
	return {
		type: 'SET_USER_DATA',
		payload: { id, email, login, isAuth },
	};
};

export const getAuthTC = () => {
	return (dispatch) => {
		authAPI.getMe().then((response) => {
			if (response.data.resultCode === 0) {
				let { id, email, login } = response.data.data;
				dispatch(setUserData(id, email, login, true));
			}
		});
	};
};

export const login = (email, password, rememberMe) => {
	return (dispatch) => {
		authAPI.login(email, password, rememberMe).then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(getAuthTC());
			}
		});
	};
};

export const logout = () => {
	return (dispatch) => {
		authAPI.logout().then((response) => {
			if (response.data.resultCode === 0) {
				dispatch(getAuthTC(null, null, null, false));
			}
		});
	};
};

export default authReducer;
