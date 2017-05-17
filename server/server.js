const express = require("express");
var session = require("express-session");
var MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");

const User = require("./model/user.js");
const Task = require("./model/task.js");

let app = express();

let corsOptions = {
	origin: ["http://localhost:3000"],
	credentials: true,
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: true
};

var store = new MongoDBStore({
	uri: "mongodb://192.168.99.100:27017/user",
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
// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept"
// 	);
// 	next();
// });
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

app.post("/submitInfo", (req, res) => {
	console.log(req);
	Task.create(Object.assign({}, req.body.data))
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
	console.log(req.user, "taskList server");
	var query = Task.find({ username: req.user });

	query.exec(function(error, tasks) {
		if (error) alert("Error in database data retrieval");
		console.log(tasks, "taskList server");
		res.json(tasks);
	});
});

app.get("/", (req, res) => {
	console.log("req.user", req.user);
	res.json({ msg: "its the root" });
});

//app.listen(<port number>, <do something after successfully listening to port>)
app.listen(9000, function() {
	console.log("Example app listening on port 9000!");
});

passport.serializeUser(function(user, cb) {
	console.log("serializeUser()");
	cb(null, user._id);
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
