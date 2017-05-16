import { connect } from "react-redux";
import Signup from "../components/Signup.js";

const mapStateToProps = state => {
  return {
    username: state.username,
    hasAuthed: state.hasAuthed
  };
};

const mapDispatchToProps = dispatch => ({
  signupUser: (username, password) => {
    // console.log(task);
    // console.log("addTask");
    return dispatch({
      type: "SIGNUP_USER",
      username: username,
      password: password
    });
  }
});

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;
