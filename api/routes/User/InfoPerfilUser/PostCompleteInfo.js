const express = require("express");
const completeInfo = express.Router();
const Users = require("../../../models/Users");

completeInfo.use("/:id", async (req, res) => {
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
});
module.exports = completeInfo;
