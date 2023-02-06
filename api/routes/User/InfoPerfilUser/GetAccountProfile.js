const express = require("express");
const getAccount = express.Router();
const User = require("../../../models/Users");
const { isUser } = require("../../../middleware/auth");

// Ruta para obtener los datos de un ususario especifico por su token

getAccount.get("/:id", async (req, res) => {
 
  try {
    const infoUser = await User.findOne({ _id: req.params.id });
    res.status(200).send(infoUser);
  } catch (error) {
    res.status(500).send("Error en el servidor al buscar tus datos");
  }
});
//GET A http://localhost:3001/getAccountProfile/63c8ba4aa3a302dee5785724
//-->  http://localhost:3001/getAccountProfile/id del usuario, este llega por el frontend

module.exports = getAccount;
