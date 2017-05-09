import React, { Component } from "react";

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
    this.props.editTask(this.state.taskName);
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

export default EditTask;
