import React, { Component } from "react";
import axios from "axios";
import Grid from "grid-styled";
import styled from "styled-components";

const StyledButton = styled.button`
  float:right;
`;

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
      <Grid>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Username:</td>
                <td>
                  <input
                    name="username"
                    type="text"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Password:
                </td>
                <td>
                  <input
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr><td /><td><StyledButton> Submit </StyledButton></td></tr>
            </tbody>
          </table>
        </form>
      </Grid>
    );
  }
}

export default Signin;