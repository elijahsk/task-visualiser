const express = require("express");
const router = express.Router();
const Promise = require("bluebird");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const User = require("../model/user.js");

passport.use(
	"local-signup",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password"
		},
		(username, password, done) => {
			if (!username) {
				return done(null, false, { message: "No username provided" });
			}
			if (!password) {
				return done(null, false, { message: "No password provided" });
			}
			User.findOne(
				{
					username: username
				},
				"-password"
			)
				.exec()
				.then(user => {
					if (user) {
						console.log("Username already taken");
						return done(null, false, {
							message: "Username already taken"
						});
					}
					return User.create({
						username,
						password
					});
				})
				.then(newUser => {
					if (newUser !== undefined)
						return User.findOne(newUser._id, "-password").exec();
				})
				.then(newUser => {
					return done(null, newUser);
				})
				.catch(err => {
					return done(err);
				});
		}
	)
);

passport.use(
	"local-login",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password"
		},
		(username, password, done) => {
			console.log(username, password);
			if (!username) {
				return done(null, false, { message: "No username provided" });
			}
			if (!password) {
				return done(null, false, { message: "No password provided" });
			}
			User.findOne({
				username: username
			})
				.exec()
				.then(user => {
					if (!user) {
						return done(null, false, {
							message: "No user found"
						});
					} else {
						console.log(user);
						if (password === user.password) {
							return done(null, user);
						} else
							return done(null, false, {
								message: "Wrong password"
							});

						// user.comparePassword(password, (err, isMatch) => {
						// 	if (err) {
						// 		return done(err);
						// 	}
						// 	if (isMatch) {
						// 		return done(null, user);
						// 	} else {
						// 		return done(null, false, {
						// 			message: "Password is wrong"
						// 		});
						// 	}
						// });
					}
				})
				.catch(err => {
					return done(err);
				});
		}
	)
);

router.post(
	"/signup",
	(req, res, next) => {
		console.log(req);
		next();
	},
	passport.authenticate("local-signup"),
	(req, res) => {
		res.sendStatus(201);
	}
);

router.post(
	"/signin",
	(req, res, next) => {
		console.log("zzz");
		next();
	},
	passport.authenticate("local-login"),
	(req, res) => {
		res.sendStatus(200);
	}
);

router.get("/logout", (req, res) => {
	req.logout();
	res.sendStatus(200);
});

module.exports = router;
