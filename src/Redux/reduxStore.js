import { combineReducers, legacy_createStore } from 'redux';
import profileReducer from '../Redux/profileReducer';
import messagesReducer from '../Redux/messagesReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
});

let store = legacy_createStore(reducers);

export default store;
