const bcrypt = require("bcrypt");
const  User  = require("../models/Users");
const express = require("express");
const login = express.Router();
const jwt = require("jsonwebtoken");   
require('dotenv').config();

const generateAuthToken = (user) => {
  const jwtSecretKey = process.env.JWT_SECRET_KEY; //
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.userName,
      email: user.email,
      isAdmin: user.admin,
    },
    jwtSecretKey,
    {
      expiresIn: '1h'
    }
  );
  return token;
};

login.post("/", async (req, res) => {
  const { email, password } = req.body.form;
  
  if ( email && password) {
   
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).send("Invalid email or password...");
    if(user.isBlocked){
      return res.status(401).send("Tu cuenta ha sido bloqueada");
  }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).send("Invalid email or password...");

    const token = generateAuthToken(user);

    res.send({ token, id: user._id, type: user.admin});

  } else {
    res.status(400).send("Datos incompletos");
  }
});

module.exports = login;
