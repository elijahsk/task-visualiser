import React, { Component } from "react";

import axios from "axios";

class Signup extends Component {
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
    axios
      .post("http://localhost:9000/signup", {
        username: this.state.username,
        password: this.state.password // need to encrypt
      })
      .then(res => {
        console.log(res);
        alert("signup response");
        if (res.status === 201) alert("Signup successfully");
        else alert("Error in signup");
      })
      .catch(err => {
        console.log("xxx");
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
        <label>
          Repeat:
          <input
            name="passwordRepeat"
            type="password"
            onChange={this.handleChange}
          />
        </label>
        <button>
          Submit
        </button>
      </form>
    );
  }
}

export default Signup;
