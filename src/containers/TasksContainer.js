import { connect } from "react-redux";
import Tasks from "../components/Tasks.js";

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    username: state.username,
    hasAuthed: state.hasAuthed
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
  }
});

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;
