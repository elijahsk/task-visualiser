import React, { Component } from "react";
import Grid from "grid-styled";
import axios from "axios";
import styled from "styled-components";

const StyledButton = styled.button`
  float:right;
`;

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
        password: this.state.password
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
                <td>Password:</td>
                <td>
                  <input
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Repeat Password:</td>
                <td>
                  <input
                    name="passwordRepeat"
                    type="password"
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td /><td>
                  <StyledButton>
                    Submit
                  </StyledButton>
                </td>
              </tr>
            </tbody>
          </table>

        </form>
      </Grid>
    );
  }
}

export default Signup;
