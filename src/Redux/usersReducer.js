import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SPINNER_TOGGLE = 'SPINNER_TOGGLE';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
	users: [],
	pageSize: 32,
	totalItemsCount: 0,
	currentPage: 1,
	Spinner: true,
	followingInProgress: [],
};

const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
	return items.map((u) => {
		if (u[objPropName] === itemId) {
			return { ...u, ...newObjProps };
		}
		return u;
	});
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
				// users: state.users.map((u) => {
				// 	if (u.id === action.userId) {
				// 		return { ...u, followed: true };
				// 	}
				// 	return u;
				// }),
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
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
				totalItemsCount: action.count,
			};
		}
		case SPINNER_TOGGLE: {
			return {
				...state,
				Spinner: action.isFetching,
			};
		}
		case TOGGLE_FOLLOWING_IN_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter((id) => id !== action.userId),
			};
		}
		default:
			return state;
	}
};

export const acceptFollow = (userId) => {
	return {
		type: 'FOLLOW',
		userId,
	};
};

export const acceptUnfollow = (userId) => {
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

export const setTotalUsersCount = (totalItemsCount) => {
	return {
		type: 'SET_TOTAL_USERS_COUNT',
		count: totalItemsCount,
	};
};

export const setSpinnerToggle = (isFetching) => {
	return {
		type: 'SPINNER_TOGGLE',
		isFetching,
	};
};

export const toggleFollowingProgress = (isFetching, userId) => {
	return {
		type: 'TOGGLE_FOLLOWING_IN_PROGRESS',
		isFetching,
		userId,
	};
};

export const getUsersThunkCreator = (page, pageSize) => async (dispatch) => {
	dispatch(setSpinnerToggle(true));
	dispatch(setCurrentPage(page));
	let data = await usersAPI.getUsers(page, pageSize);
	dispatch(setSpinnerToggle(false));
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId);
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), acceptFollow);
};

export const unfollow = (userId) => async (dispatch) => {
	followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), acceptUnfollow);
};

export default usersReducer;
