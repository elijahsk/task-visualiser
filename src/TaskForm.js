import React, { Component } from "react";

class TaskForm extends Component {
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
    // console.log(this.state);
    // console.log("form");
    this.props.addTask(this.state);
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

export default TaskForm;
