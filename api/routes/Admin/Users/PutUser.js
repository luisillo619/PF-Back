const express = require("express");
const putUser = express.Router();

const User = require("../../../models/Users");

putUser.use("/:id", (req, res) => {
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
});

module.exports = putUser;
