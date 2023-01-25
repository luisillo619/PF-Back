const express = require("express");
const putAddress= express.Router();
const Address = require("../../../models/Address");
const { isUser } = require("../../../middleware/auth");
//!REVISAR
//Ruta para modificar una dirección del usuario
putAddress.use("/:id", isUser, (req, res) => {  //id de la dirección
  try {
    Address.findByIdAndUpdate(
      req.params.id, req.body,
      { new: true }, (error, datos) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send(datos);
        }
      }
    );
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});
module.exports = putAddress;