import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

// const initialState = {
//     tasks: []
// };

// state = [];

//basic version, usually its bigger and more various, refer to example below
const reducer = (state = { tasks: [] }, action) => {
    console.log("action", action);
    switch (action.type) {
        case "CONCAT_TASKS": {
            let tasks = action.tasks || [];
            return {
                tasks: tasks.concat(state.tasks)
            };
        }
        case "ADD_TASK":
            // console.log(state.tasks.concat(action.taskName));
            return {
                tasks: state.tasks.concat(action.taskName)
            };
        case "EDIT_TASK":
            return {
                tasks: state.tasks
                    .slice(0, action.index)
                    .concat(action.taskName)
                    .concat(state.tasks.slice(action.index + 1))
            };
        default:
            return state;
    }
};

// add support for Redux dev tools
// for production app, should also include logic to exclude in prod builds
const isBrowser = typeof window !== "undefined";
const composeEnhancers = isBrowser
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const initStore = initialState => {
    return createStore(
        reducer, //pass in rootReducer for bigger applications
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
    );
};
