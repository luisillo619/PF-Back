require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const routes = require("./routes/index");
const auth = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");

const app = express();

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 1 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);
app.use("/auth", auth)
app.use("/", routes);

module.exports = app;

