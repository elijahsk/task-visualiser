import React, { Component } from "react";
import TaskForm from "./TaskForm.js";
import TaskList from "./TaskList.js";
import Grid from "grid-styled";

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
        <Grid><TaskForm addTask={this.props.addTask} /></Grid>
        <Grid><TaskList tasks={this.props.tasks} /></Grid>
      </div>
    );
  }
}

export default Tasks;
