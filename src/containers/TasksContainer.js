import { connect } from "react-redux";
import Tasks from "../components/Tasks.js";

const mapStateToProps = state => {
  return {
    tasks: state.taskReducer.tasks,
    username: state.userReducer.username,
    hasAuthed: state.userReducer.hasAuthed
  };
};

const mapDispatchToProps = dispatch => ({
  addTask: task => {
    // console.log(task);
    // console.log("addTask");
    return dispatch({
      type: "ADD_TASK",
      taskName: task.taskName
    });
  },
  editTask: (task, index) => {
    // console.log(task);
    // console.log("editTask");
    return dispatch({
      type: "EDIT_TASK",
      taskName: task,
      index: index
    });
  },
  clearTasks: () => {
    return dispatch({
      type: "CLEAR_TASKS"
    });
  }
});

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;
