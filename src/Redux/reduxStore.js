import { combineReducers, legacy_createStore } from 'redux';
import profileReducer from '../Redux/profileReducer';
import messagesReducer from '../Redux/messagesReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	usersPage: usersReducer,
	auth: authReducer,
});

let store = legacy_createStore(reducers);

window.store = store;
export default store;
