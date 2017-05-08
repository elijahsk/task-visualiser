import React from "react";
import "./App.css";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.concat = this.concat.bind(this);
    this.modify = this.modify.bind(this);
  }

  concat(props) {
    const taskName = props.taskName;
    this.setState({
      tasks: this.state.tasks.concat(taskName)
    });
  }

  modify(taskName, index) {
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index),
        taskName,
        ...this.state.tasks.slice(index + 1)
      ]
    });
    //console.log(this.state.tasks);
  }

  render() {
    // console.log(this.state.tasks);
    // console.log("before");
    return (
      <div>
        <TaskForm concat={this.concat} />
        <TaskList tasks={this.state.tasks} modify={this.modify} />
      </div>
    );
  }
}

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.modify = this.modify.bind(this);
  }

  modify(taskName, index) {
    this.props.modify(taskName, index);
  }

  render() {
    const tasks = this.props.tasks;
    return (
      <div>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <ToggleTask task={task} index={index} modify={this.modify} />
            </div>
          );
        })};
      </div>
    );
  }
}

class ToggleTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.modify = this.modify.bind(this);
  }

  handleToggle(event) {
    this.setState({
      isEditing: this.state.isEditing === true ? false : true
    });
  }

  modify(taskName) {
    //console.log(prop);
    //console.log(this.props);
    const index = this.props.index;
    this.props.modify(taskName, index);
    this.handleToggle();
  }

  render() {
    const isEditing = this.state.isEditing;
    if (isEditing) {
      return <EditTask task={this.props.task} modify={this.modify} />;
    } else {
      return <p onClick={this.handleToggle}>{this.props.task}</p>;
    }
  }
}

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      taskName: this.props.task
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      taskName: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.modify(this.state.taskName);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.taskName}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
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
    //console.log(this);

    this.props.concat(this.state);
  }

  render() {
    //console.log(this.state);
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Tasks;
