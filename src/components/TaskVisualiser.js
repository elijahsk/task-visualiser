import React, { Component } from "react";
import { Provider } from "react-redux";
import { initStore } from "../reducers/store.js";
import TasksContainer from "../containers/TasksContainer.js";

class TaskVisualiser extends Component {
  render() {
    return (
      <div>
        <Provider store={initStore()}>
          <TasksContainer />
        </Provider>
      </div>
    );
  }
}

export default TaskVisualiser;
