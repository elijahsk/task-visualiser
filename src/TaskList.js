import React, { Component } from "react";
import ToggleTask from "./ToggleTask.js";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.editTask = this.editTask.bind(this);
  }

  editTask(taskName, index) {
    console.log("TaskList", taskName, index);
    this.props.editTask(taskName, index);
  }

  render() {
    const tasks = this.props.tasks;
    console.log("taskList", tasks);
    return (
      <div>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <ToggleTask task={task} index={index} editTask={this.editTask} />
            </div>
          );
        })};
      </div>
    );
  }
}

export default TaskList;
