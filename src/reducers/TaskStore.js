const taskReducer = (state = { tasks: [] }, action) => {
    console.log("action", action);
    switch (action.type) {
        case "CONCAT_TASKS": {
            let tasks = action.tasks || [];
            return {
                tasks: tasks.concat(state.tasks)
            };
        }
        case "ADD_TASK":
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

export default taskReducer;
