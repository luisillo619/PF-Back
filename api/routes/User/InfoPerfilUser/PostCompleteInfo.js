const express = require("express");
const completeInfo = express.Router();
const Users = require("../../../models/Users");
const { isUser } = require("../../../middleware/auth");


// Ruta para agregar los datos completos de un usuario
completeInfo.use("/:id", isUser, async (req, res) => {
  try {
    const { name, lastName, docIdentity } = req.body;
    if (!name || !lastName || !docIdentity)
      return res.status(400).json({ msg: "Faltan datos" });

    Users.findByIdAndUpdate(req.params.id, req.body, (error, datos) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(201).send(datos);
      }
    });
  } catch (error) {
    res.status(500).send('Error en el servidor al buscar tus datos');
  }
});


module.exports = completeInfo;