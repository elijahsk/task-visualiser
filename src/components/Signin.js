import React, { Component } from "react";
import axios from "axios";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    console.log(this.state);
    axios
      .post("http://localhost:9000/signin", {
        username: this.state.username,
        password: this.state.password,
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        if (res.status === 500) alert("Invalid username / password");
        else alert("Signin successfully");
      })
      .catch(err => {
        console.log(err);
        alert("there is an error!");
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input name="username" type="text" onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input name="password" type="password" onChange={this.handleChange} />
        </label>
        <button> Submit </button>
      </form>
    );
  }
}

export default Signin;
