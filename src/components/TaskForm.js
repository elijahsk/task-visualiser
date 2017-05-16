import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

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
    this.props.addTask(this.state);
    axios
      .post("http://localhost:9000/submitInfo", {
        data: {
          title: this.state.taskName
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
    //console.log(this.state);
    return this.props.hasAuthed
      ? <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Task Name</td>
                <td>
                  <input
                    name="taskName"
                    type="text"
                    value={this.state.taskName}
                    onChange={this.handleChange}
                  />
                </td>
                <td> <button> Submit </button> </td>
              </tr>
            </tbody>
          </table>
        </form>
      : <Redirect to="/signin" />;
  }
}

export default TaskForm;
