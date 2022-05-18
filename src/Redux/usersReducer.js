const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SPINNER_TOGGLE = 'SPINNER_TOGGLE';
const TOGGLE_FOLLOWING_IN_SEND = 'TOGGLE_FOLLOWING_IN_SEND';

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	Spinner: true,
	followingInSend: false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: true };
					}
					return u;
				}),
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return { ...u, followed: false };
					}
					return u;
				}),
			};
		}
		case SETUSERS: {
			return {
				...state,
				users: action.users,
			};
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.currentPage,
			};
		}
		case SET_TOTAL_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.count,
			};
		}
		case SPINNER_TOGGLE: {
			return {
				...state,
				Spinner: action.isFetching,
			};
		}
		case TOGGLE_FOLLOWING_IN_SEND: {
			return {
				...state,
				followingInSend: action.isFetching,
			};
		}
		default:
			return state;
	}
};

export const follow = (userId) => {
	return {
		type: 'FOLLOW',
		userId,
	};
};

export const unfollow = (userId) => {
	return {
		type: 'UNFOLLOW',
		userId,
	};
};

export const setUsers = (users) => {
	return {
		type: 'SETUSERS',
		users,
	};
};

export const setCurrentPage = (currentPage) => {
	return {
		type: 'SET_CURRENT_PAGE',
		currentPage,
	};
};

export const setTotalUsersCount = (totalUsersCount) => {
	return {
		type: 'SET_TOTAL_USERS_COUNT',
		count: totalUsersCount,
	};
};

export const setSpinnerToggle = (isFetching) => {
	return {
		type: 'SPINNER_TOGGLE',
		isFetching,
	};
};

export const followingInSend = (isFetching) => {
	return {
		type: 'TOGGLE_FOLLOWING_IN_SEND',
		isFetching,
	};
};

export default usersReducer;
