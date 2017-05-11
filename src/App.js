import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { initStore } from "./store.js";
import Tasks from "./Tasks.js";
import axios from "axios";

class App extends Component {
  render() {
    console.log(initStore);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Provider store={initStore()}>
          <Tasks />
        </Provider>
      </div>
    );
  }
}

export default App;
