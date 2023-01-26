const express = require("express");
const getFav = express.Router();
const User = require("../../../models/Users");
const { isUser } = require("../../../middleware/auth");

// Ruta para obtener los favoritos de un usuario especifico
getFav.use("/:id", isUser, (req, res) => {
  try {
    User.findById(req.params.id)
      .populate("favorites")
      .exec((err, user) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.send(user.favorites);
      });
  } catch (error) {
    res.status(500).send("Error interno del servidor.");
  }
});

module.exports = getFav;
