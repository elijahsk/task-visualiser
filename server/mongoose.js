const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

let options = Object.assign({
	// db: 'xpo',
	server: {
		poolSize: 5,
		auto_reconnect: true,
		reconnectTries: 3,
		socketOptions: {
			keepAlive: 100,
			connectTimeoutMS: 5000,
			socketTimeoutMS: 30000
		}
	}
});

let host = "192.168.99.100";

mongoose.connect("mongodb://" + host + "/temp", options);

mongoose.connection.on("error", function(error) {
	console.log("mongoose err", error);
});
mongoose.connection.on("connected", function() {
	console.log("Connection established to MongoDB");
});
mongoose.connection.on("reconnected", function() {
	console.log("Reconnected to MongoDB");
});

module.exports = mongoose;
