import React from "react";
import EditTask from "./EditTask.js";

class ToggleTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  handleToggle(event) {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  editTask(taskName) {
    //console.log(prop);
    //console.log(this.props);
    const index = this.props.index;
    this.props.editTask(taskName, index);
    this.handleToggle();
  }

  render() {
    const isEditing = this.state.isEditing;

    if (isEditing) {
      return <EditTask task={this.props.task} editTask={this.editTask} />;
    } else {
      return <p onClick={this.handleToggle}>{this.props.task}</p>;
    }
  }
}

export default ToggleTask;
