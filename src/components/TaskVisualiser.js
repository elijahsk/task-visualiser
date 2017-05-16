import React, { Component } from "react";
import { Provider } from "react-redux";
import { Store } from "../reducers/CombineStore.js";
import TasksContainer from "../containers/TasksContainer.js";

class TaskVisualiser extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          <TasksContainer />
        </Provider>
      </div>
    );
  }
}

export default TaskVisualiser;
