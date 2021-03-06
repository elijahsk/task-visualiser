import React, { Component } from "react";
import TaskForm from "./TaskForm.js";
import TaskList from "./TaskList.js";
import Grid from "grid-styled";
import { Redirect } from "react-router";

export class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.updateTasks = this.updateTasks.bind(this);
  }

  updateTasks(tasks) {
    console.log(tasks, "from tasklist");
    this.props.clearTasks();
    tasks.forEach(element => {
      this.props.addTask({ taskName: element });
    });
  }

  render() {
    // console.log(this.props.tasks);
    // console.log("Tasks");
    console.log(this.props.tasks);
    return this.props.hasAuthed
      ? <div>
          <Grid>
            <TaskForm
              addTask={this.props.addTask}
              username={this.props.username}
            />
          </Grid>
          <Grid>
            <TaskList
              tasks={this.props.tasks}
              clearTasks={this.props.clearTasks}
              updateTasks={this.updateTasks}
              username={this.props.username}
            />
          </Grid>
        </div>
      : <Redirect to="/signin" />;
  }
}

export default Tasks;
