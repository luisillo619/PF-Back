const express = require("express");
const deleteComent = express.Router();
const Comment = require("../../../models/Comments");
const { isUser } = require("../../../middleware/auth");



//Ruta para eliminar comentarios por parte del Admin
deleteComent.use("/:id", isUser, async (req, res) => {
  Comment.findByIdAndRemove(req.params.id, (error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("Comentario eliminado exitosamente!");
    }
  });
});
//DELETE - http://localhost:3001/deleteComent/63cda3e3acfa8002f739839d --> id del comentario

module.exports = deleteComent;
