const express = require("express");
const putAdress= express.Router();

const Addres = require("../../../models/Address");   

putAdress.use("/:id", (req, res) => {
    Addres.findByIdAndUpdate(
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
});

module.exports = putAdress;