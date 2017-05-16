import React from "react";
import ReactDOM from "react-dom";

import Tasks from "./components/Tasks.js";
import Signin from "./components/Signin.js";
import SignupContainer from "./containers/SignupContainer.js";

import { Provider } from "react-redux";
import configureStore from "./reducers/CombineStore.js";

import styled from "styled-components";
import { Half, Third } from "grid-styled";
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
					<Third> <Link to="/tasks">Home</Link> </Third>
					<Third><Link to="/signin">Signin</Link></Third>
					<Third><Link to="/signup">Signup</Link></Third>
				</Half>
				<hr />

				<Route exact path="/tasks" component={Tasks} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={SignupContainer} />
			</div>
		</Router>
	</Provider>,
	document.getElementById("root")
);
