import React from "react";
import ReactDOM from "react-dom";

import TasksContainer from "./containers/TasksContainer.js";
import SigninContainer from "./containers/SigninContainer.js";
import SignupContainer from "./containers/SignupContainer.js";
import LogoutContainer from "./containers/LogoutContainer.js";

import { Provider } from "react-redux";
import configureStore from "./reducers/CombineStore.js";

import styled from "styled-components";
import { Half, Quarter } from "grid-styled";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Icon = styled(Link)`
	font-size: 20px;
	text-decoration: none;
	color: black;
	`;

const initialState = {
	taskReducer: {
		tasks: []
	},
	userReducer: {
		hasAuthed: false,
		username: "Guest"
	}
};

ReactDOM.render(
	<Provider store={configureStore(initialState)}>
		<Router>
			<div>
				<Half><Icon to="/tasks">Task Visualiser</Icon></Half>
				<Half>
					<Quarter> <Link to="/tasks">Home</Link> </Quarter>
					<Quarter><Link to="/signin">Signin</Link></Quarter>
					<Quarter><Link to="/signup">Signup</Link></Quarter>
					<Quarter><Link to="/logout">Logout</Link></Quarter>
				</Half>
				<hr />

				<Route exact path="/tasks" component={TasksContainer} />
				<Route path="/signin" component={SigninContainer} />
				<Route path="/signup" component={SignupContainer} />
				<Route path="/logout" component={LogoutContainer} />
			</div>
		</Router>
	</Provider>,
	document.getElementById("root")
);
