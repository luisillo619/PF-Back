const express = require("express");
const putUser = express.Router();
const User = require("../../../models/Users");
const { isUser } = require("../../../middleware/auth");

// UNIFICAR ISUSER
//Ruta para modificar información de usuario por parte del Admin
putUser.put("/:id", isUser, (req, res) => {
  try {
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, datos) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send(datos);
        }
      }
    );
  } catch (error) {
    res.status(500).send("Error interno del servidor.");
  }
});

module.exports = putUser;
