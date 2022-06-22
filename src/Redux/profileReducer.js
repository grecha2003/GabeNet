import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETED_POST = 'DELETED_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const PRELOADER_PHOTO = 'PRELOADER_PHOTO';

let initialState = {
	posts: [
		{
			id: 0,
			message: 'Hic vitae hic dolorem possimus non incidunt deleniti ut.',
			LikesCount: 19,
			key: 0,
		},
		{
			id: 1,
			message: `Laudantium quas tempore.Voluptatibus sit necessitatibus quisquam itaque iure rem.
								Laborum est et recusandae voluptatum.
								Et dolores dolore qui reiciendis.`,
			LikesCount: 20,
			key: 1,
		},
		{
			id: 2,
			message:
				'Aut reprehenderit architecto eum in. Est ad doloribus iusto qui modi repudiandae dolores quia veritatis. Consequuntur quia est voluptates officia impedit et totam. Iusto nam dolore tenetur et incidunt rerum eos doloribus. Voluptas nihil blanditiis.',
			LikesCount: 23,
			key: 2,
		},
	],
	profile: null,
	status: '',
	isLoaded: false,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 4,
				message: action.newPostText,
				LikesCount: 0,
			};
			return {
				...state,
				newPostText: '',
				posts: [...state.posts, newPost],
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile,
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status,
			};
		}
		case DELETED_POST: {
			return {
				...state,
				posts: state.posts.filter((p) => p.id !== action.postId),
			};
		}
		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			};
		}
		case PRELOADER_PHOTO: {
			return {
				...state,
				isLoaded: action.isLoaded,
			};
		}
		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => {
	return {
		type: 'ADD-POST',
		newPostText,
	};
};
export const setUserProfile = (profile) => {
	return {
		type: 'SET_USER_PROFILE',
		profile,
	};
};
export const setStatusAC = (status) => {
	return {
		type: 'SET_STATUS',
		status,
	};
};

export const deletedPost = (postId) => {
	return {
		type: 'DELETED_POST',
		postId,
	};
};

export const savePhotoSuccess = (photos) => {
	return {
		type: 'SAVE_PHOTO_SUCCESS',
		photos,
	};
};

export const setPreloaderPhoto = (isLoaded) => {
	return {
		type: 'PRELOADER_PHOTO',
		isLoaded,
	};
};

export const getUserProfileTC = (userId) => async (dispatch) => {
	const response = await profileAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};

export const getStatusTC = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId);
	dispatch(setStatusAC(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatusAC(status));
	}
};

export const savePhoto = (file) => async (dispatch) => {
	dispatch(setPreloaderPhoto(true));
	const response = await profileAPI.savePhoto(file);
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
		dispatch(setPreloaderPhoto(false));
	}
};

export default profileReducer;
