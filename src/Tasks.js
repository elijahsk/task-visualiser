import React, { Component } from "react";
import TaskForm from "./TaskForm.js";
import TaskList from "./TaskList.js";

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

export default Tasks;
