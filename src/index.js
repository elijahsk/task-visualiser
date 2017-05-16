import React from "react";
import ReactDOM from "react-dom";

import TaskVisualiser from "./components/TaskVisualiser.js";
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";

import styled from "styled-components";
import { Half, Third } from "grid-styled";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Icon = styled(Link)`
	font-size: 20px;
	text-decoration: none;
	color: black;
	`;

ReactDOM.render(
	<Router>
		<div>
			<Half><Icon to="/tasks">Task Visualiser</Icon></Half>
			<Half>
				<Third> <Link to="/tasks">Home</Link> </Third>
				<Third><Link to="/signin">Signin</Link></Third>
				<Third><Link to="/signup">Signup</Link></Third>
			</Half>
			<hr />

			<Route exact path="/tasks" component={TaskVisualiser} />
			<Route path="/signin" component={Signin} />
			<Route path="/signup" component={Signup} />
		</div>
	</Router>,
	document.getElementById("root")
);
