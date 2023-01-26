require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const routes = require("./routes/index");
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

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors({origin: '*'}));
app.use((req, res, next) => {  
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();

  });

app.use("/", routes);

module.exports = app;

