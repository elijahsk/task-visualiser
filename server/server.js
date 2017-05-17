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
	uri: "mongodb://192.168.99.100:27017/temp",
	collection: "sessions"
});

let sessionOptions = {
	store: store,
	secret: "secret",
	resave: true,
	saveUninitialized: true,
	cookie: {}
};

app.use(cors(corsOptions));
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
	console.log(req.body.data, "submitInfo server");
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

app.post("/editTask", (req, res) => {
	console.log(req.body.data);
	var query = {
		username: req.user.username,
		title: req.body.data.oldTitle
	};
	console.log(query);
	Task.findOneAndUpdate(query, { title: req.body.data.title })
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
	var query = Task.find({ username: req.user.username });

	query.exec(function(error, tasks) {
		if (error) {
			console.log("There is an error");
		} else {
			res.json(tasks);
		}
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
