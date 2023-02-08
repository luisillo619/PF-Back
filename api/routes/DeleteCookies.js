const express = require("express"); //Express
const deleteCookies = express.Router(); //Ruta administrador
const Users = require("../models/Users"); //Model


// Ruta para obtener todas las categorias
deleteCookies.get("/:id", async (req, res) => {
  try {
    const user = await Users.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send("ususario Inexistente");

    const isBlocked = user.isBlocked;

    return res.status(200).send(isBlocked);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

module.exports = deleteCookies;
