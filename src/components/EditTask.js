import React from "react";
import axios from "axios";

let instance = axios.create({
  baseURL: "http://localhost:9000",
  timeout: 3000,
  withCredentials: true
});

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      taskName: this.props.task,
      oldTaskName: this.props.task
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
    this.props.editTask(this.state.taskName, this.props.index);
    this.props.handleToggle();
    instance
      .post("http://localhost:9000/editTask", {
        data: {
          title: this.state.taskName,
          oldTitle: this.state.oldTaskName,
          username: this.props.username
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        alert("there is an error!");
      });
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
          <button>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditTask;
