import { authAPI } from '../api/api';

const SET_USER_DATA = 'gabeNet/auth/SET_USER_DATA';

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
			};
		}
		default:
			return state;
	}
};

export const setUserData = (id, email, login, isAuth) => ({
	type: 'gabeNet/auth/SET_USER_DATA',
	payload: { id, email, login, isAuth },
});

export const getAuthTC = () => async (dispatch) => {
	const response = await authAPI.getMe();
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data;
		dispatch(setUserData(id, email, login, true));
	}
};

export const login = (email, password, rememberMe) => async (dispatch) => {
	const response = await authAPI.login(email, password, rememberMe);
	if (response.data.resultCode === 0) {
		dispatch(getAuthTC());
	} else {
		alert(response.data.messages[0]);
	}
};

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(setUserData(null, null, null, false));
	}
};

export default authReducer;
