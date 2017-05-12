const express = require("express");
var session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");

const User = require("./model/user.js");
const taskSchema = require("./model/task.js");

let app = express();

let corsOptions = {
	origin: ["http://localhost:3000"],
	credentials: true,
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: true
};

var store = new MongoDBStore({
	uri: "mongodb://192.168.1.112:27017/user",
	collection: "Sessions"
});

let sessionOptions = {
	store: store,
	secret: "secret",
	resave: true,
	saveUninitialized: true,
	cookie: {}
};

app.use(cors(corsOptions));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
app.options("*", cors(corsOptions)); // include before other routes

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

app.all("*", (req, res, next) => {
	console.log(req.method + " " + req.url);
	next();
});

// app.post("/submitSignup", (req, res) => {
// 	User.create(Object.assign({}, req.body.data))
// 		.then(data => {
// 			console.log(data);
// 			res.sendStatus(200);
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.sendStatus(500);
// 		});
// });

// app.post("/submitSignin", (req, res) => {
// 	var query = User.find({ username: req.signupUsername });
// 	query.exec(function(error, user) {
// 		if (error) alert("Error in database data retrieval");
// 		console.log(user, "taskList server");
// 		if (user === undefined || req.signupPassword !== user.password)
// 			res.sendStatus(500);
// 		else res.sendStatus(200);
// 	});
// });

app.post("/submitInfo", (req, res) => {
	taskSchema
		.create(Object.assign({}, req.body.data))
		.then(data => {
			console.log(data);
			res.sendStatus(200);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

app.get("/taskList", (req, res) => {
	console.log("taskList server before");
	var query = taskSchema.find();
	query.exec(function(error, tasks) {
		if (error) alert("Error in database data retrieval");
		console.log(tasks, "taskList server");
		res.json(tasks);
	});
});

//app.<method>(<address>, <function>);
// method - GET, POST, UPDATE, PUT, DELETE (check REST api)
// address - "/", "/user/7347349", "/matches"
app.get("/", (req, res) => {
	res.json({ msg: "its the root" });
});

app.get("/user", (req, res) => {
	res.json({ user: req.user });
});

//app.listen(<port number>, <do something after successfully listening to port>)
app.listen(9000, function() {
	console.log("Example app listening on port 9000!");
});

passport.serializeUser(function(id, cb) {
	console.log("serializeUser()");
	cb(null, id);
});

passport.deserializeUser(function(id, cb) {
	console.log("deserializeUser()");
	User.findById(id, (err, user) => {
		if (err) {
			return cb(err);
		}
		return cb(null, user);
	});
});

app.use(require("./api/auth.js"));
