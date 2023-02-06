const express = require("express");
const getComment = express.Router();
const Comment = require("../models/Comments");

// Ruta para obtener todas los Comentarios

// id producto
// consultar a la coleccion de Usuarios el nombre para retornornalo al front
getComment.get("/:id", async (req, res) => {
  try {
    Comment.find({ product: req.params.id }).exec((err, comments) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(comments);
    });

  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

module.exports = getComment;
