import { connect } from "react-redux";
import Signin from "../components/Signin.js";

const mapStateToProps = state => {
  return {
    username: state.username,
    hasAuthed: state.hasAuthed
  };
};

const mapDispatchToProps = dispatch => ({
  signinUser: (username, password) => {
    // console.log(task);
    // console.log("addTask");
    return dispatch({
      type: "SIGNIN_USER",
      username: username
    });
  }
});

const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(Signin);

export default SigninContainer;
