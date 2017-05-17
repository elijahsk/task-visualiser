import { connect } from "react-redux";
import EditTask from "../components/EditTask.js";

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    username: state.username
  };
};

const mapDispatchToProps = dispatch => ({
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

const EditTaskContainer = connect(mapStateToProps, mapDispatchToProps)(
  EditTask
);

export default EditTaskContainer;
