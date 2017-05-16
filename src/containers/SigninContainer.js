import { connect } from "react-redux";
import Signin from "../components/Signin.js";

const mapStateToProps = state => {
  return {
    username: state.userReducer.username,
    hasAuthed: state.userReducer.hasAuthed
  };
};

const mapDispatchToProps = dispatch => ({
  signinUser: username => {
    // console.log(task);
    return dispatch({
      type: "SIGNIN_USER",
      username: username
    });
  }
});

const SigninContainer = connect(mapStateToProps, mapDispatchToProps)(Signin);

export default SigninContainer;
