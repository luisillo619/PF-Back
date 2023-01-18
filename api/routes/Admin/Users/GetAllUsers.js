const express = require("express"); //Express
const user = express.Router(); //Ruta administrador
const User = require("../../../models/Users.js"); //Model

user.use("/", async (req, res) => {
  const users = await User.find();

  res.status(200).send(users);
});

module.exports = user;
