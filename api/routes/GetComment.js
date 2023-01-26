const express = require("express");
const getComment = express.Router();
const Comment = require("../models/Comments");

// Ruta para obtener todas los Comentarios
getComment.get("/", async (req, res) => {
  try {
    const users = await Comment.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

module.exports = getComment;
