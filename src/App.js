import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class TaskParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.concat = this.concat.bind(this);
  }

  concat(props) {
    console.log("concat");
    const taskName = props.taskName;
    this.setState({
      tasks: this.state.tasks.concat(taskName)
    });
  }

  render() {
    return;
    <div>
      <TaskForm concat={this.concat} />
      <TaskList tasks={this.state.tasks} />
    </div>;
  }
}

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    const tasks = this.props.tasks;
    return (
      <div>
        {this.props.tasks.map(task => {
          return (
            <div>
              {task}
            </div>
          );
        })};
      </div>
    );
  }
}

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskDescription: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this);

    this.props.concat(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task Name:
          <input
            name="taskName"
            type="text"
            value={this.state.taskName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Task Description:
          <textarea
            name="taskDescription"
            type="text area"
            value={this.state.taskDescription}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TaskForm;
