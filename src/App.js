import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      taskDescription: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state.taskName);
    console.log(this.state.taskDescription);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task Name:
          <input 
            name="taskName"
            type="text" 
            value={this.state.taskName} 
            onChange={this.handleChange} />
        </label>
        <label>
          Task Description:
          <textarea 
          name="taskDescription"
          type="text area"
          value = {this.state.taskDescription}
          onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default TaskForm;
