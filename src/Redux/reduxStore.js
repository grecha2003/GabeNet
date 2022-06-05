import { applyMiddleware, combineReducers, legacy_createStore, compose } from 'redux';
import profileReducer from '../Redux/profileReducer';
import messagesReducer from '../Redux/messagesReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
});

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
