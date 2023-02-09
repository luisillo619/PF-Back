require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const routes = require("./routes/index");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
require("dotenv").config();
const { CLIENT_URL } = process.env;
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 60 * 60,
  })
);

app.use(passport.initialize());

// sincroniza cookies con passport y hace que el login de inicio de sesion dure 1 hora
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", routes);

module.exports = app;

