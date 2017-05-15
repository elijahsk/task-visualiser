import { connect } from "react-redux";
import EditTask from "../EditTask.js";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
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
