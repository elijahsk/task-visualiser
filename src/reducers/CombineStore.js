import { combineReducers } from "redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import taskReducer from "./TaskStore.js";
import userReducer from "./UserStore.js";

const combinedStore = combineReducers({ taskReducer, userReducer });

const isBrowser = typeof window !== "undefined";
const composeEnhancers = isBrowser
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	: compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));

const configureStore = initialState => {
	return createStore(combinedStore, initialState, enhancers);
};

export default configureStore;
