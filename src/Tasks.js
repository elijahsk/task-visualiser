import React, { Component } from "react";
import { connect } from "react-redux";
import TaskForm from "./TaskForm.js";
import TaskList from "./TaskList.js";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
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

export class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  render() {
    // console.log(this.props.tasks);
    // console.log("Tasks");
    return (
      <div>
        <TaskForm addTask={this.props.addTask} />
        <TaskList tasks={this.props.tasks} editTask={this.props.editTask} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
