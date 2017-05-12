import React from "react";
import ReactDOM from "react-dom";

import TaskVisualiser from "./TaskVisualiser.js";
import Signin from "./Signin.js";
import Signup from "./Signup.js";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
	<Router>
		<div>
			<ul>
				<li><Link to="/tasks">Home</Link></li>
				<li><Link to="/signin">Signin</Link></li>
				<li><Link to="/signup">Signup</Link></li>
			</ul>

			<hr />

			<Route exact path="/tasks" component={TaskVisualiser} />
			<Route path="/signin" component={Signin} />
			<Route path="/signup" component={Signup} />
		</div>
	</Router>,
	document.getElementById("root")
);
