import { connect } from "react-redux";
import Logout from "../components/Logout.js";

const mapStateToProps = state => {
  return {
    username: state.username,
    hasAuthed: state.hasAuthed
  };
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    // console.log(task);
    // console.log("addTask");
    return dispatch({
      type: "LOGOUT_USER"
    });
  }
});

const LogoutContainer = connect(mapStateToProps, mapDispatchToProps)(Logout);

export default LogoutContainer;
