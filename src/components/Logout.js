import React from "react";
import axios from "axios";
import { Redirect } from "react-router";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log("Will mount test", this.props);

    axios
      .get("http://localhost:9000/logout")
      .then(response => {
        console.log(response, "Will mount");
        this.props.logoutUser();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return <Redirect to="/signin" />;
  }
}

export default Logout;
