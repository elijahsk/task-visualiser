import React from "react";
import { connect } from "react-redux";
import ToggleTask from "./ToggleTask.js";
import axios from "axios";
import { Quarter } from "grid-styled";

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = dispatch => ({
  concatTasks: tasks => {
    // console.log(task);
    // console.log("addTask");
    return dispatch({
      type: "CONCAT_TASKS",
      tasks: tasks
    });
  }
});

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Did mount test", this.props);

    axios
      .get("http://localhost:9000/taskList")
      .then(response => {
        console.log(response, "Did mount");
        const tasks = response.data;
        console.log(tasks);
        this.props.concatTasks(tasks.map(task => task.title));
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const tasks = this.props.tasks;
    console.log("taskList", tasks);
    return (
      <div>
        {tasks.map((task, index) => {
          return (
            <Quarter key={index}>
              <ToggleTask task={task} index={index} />
            </Quarter>
          );
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
