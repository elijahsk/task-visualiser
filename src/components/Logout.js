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
        this.props.logout();
        return <Redirect to="/signin" />;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export default Logout;
