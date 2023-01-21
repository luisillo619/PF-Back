const jwt = require("jsonwebtoken");
require('dotenv').config();

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();


passport.use(new GoogleStrategy({
  clientID: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, cb) => {
  // aqui podrias guardar el perfil del usuario en una base de datos
  return cb(null, profile);
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});


const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).send("Access denied. Not authenticated...");
  try {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey); // me trae el ususario de la base de datos automaticamente

    req.user = decoded;
    next(); // ejecuta la funcion del tercer parametro de auth en isUser y isAdmin
  } catch (ex) {
    res.status(400).send("Invalid auth token...");
  }
};

// For User Profile
const isUser = (req, res, next) => { 
   



  auth(req, res, () => {
    if (req.user._id === req.params.id || req.user.admin) {
      next();
    } else {
      res.status(403).send("Access denied. Not authorized...");
    }
  });
};

// For Admin
const isAdmin = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.admin) {
      next();
    } else {
      res.status(403).send("Access denied. Not authorized...");
    }
  });
};

module.exports = { auth, isUser, isAdmin };