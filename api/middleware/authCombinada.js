const jwt = require("jsonwebtoken");
const passport = require("passport");
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/Users");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).send("Access denied. Not authenticated...");

  try {
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid auth token...");
  }
};

const isUser = (req, res, next) => {
  auth(req, res, () => {
    if (req.user._id === req.params.id || req.user.admin) {
      next();
    } else {
      res.status(403).send("Access denied. Not authorized...");
    }
  });
};

const isAdmin = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.admin) {
      next();
    } else {
      res.status(403).send("Access denied. Not authorized...");
    }
  });
};

const generateAuthToken = (user) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.userName,
      email: user.email,
      isAdmin: user.admin,
    },
    jwtSecretKey
  );
  return token;
};

const router = express.Router();

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Loged In",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
});

router.post("/", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(400).json({ error: true, message: err });
    }

    if (!user) {
      return res.status(404).json({ error: true, message: info });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({
          error: true,
          message: err,
        });
      }

      const token = generateAuthToken(user);
      res.status(200).json({ user, token });
    });
  })(req, res);
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/home",
    failureRedirect: "/login/failed",
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.send("Hello Admin!");
});

router.get("/user/:id", auth, isUser, (req, res) => {
  res.send(`Hello User ${req.user.name}!`);
});

module.exports = { auth, isUser, isAdmin, router };
