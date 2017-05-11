const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const taskSchema = require("./schema.js");

let app = express();

let corsOptions = {
	origin: ["http://localhost:3000"],
	credentials: true,
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: true
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

app.all("*", (req, res, next) => {
	console.log(req.method + " " + req.url);
	next();
});

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

//app.<method>(<address>, <function>);
// method - GET, POST, UPDATE, PUT, DELETE (check REST api)
// address - "/", "/user/7347349", "/matches"
app.get("/", (req, res) => {
	res.json({ msg: "its the root" });
});

//app.listen(<port number>, <do something after successfully listening to port>)
app.listen(9000, function() {
	console.log("Example app listening on port 9000!");
});
