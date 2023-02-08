const express = require("express");
const getAllUsers = express.Router();
const User = require("../../../models/Users.js");
const { isAdmin } = require("../../../middleware/auth");


//Ruta para traer todos los usuarios

//ID USER
// TOKEN: IDTOKEN

//ID USER === ID TOKEN
getAllUsers.get("/:id", isAdmin ,async (req, res) => {
  try {
    const users = await User.find().populate("orders");
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});


module.exports = getAllUsers;