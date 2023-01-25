const express = require("express");
const deleteComent = express.Router();
const Comment = require("../../../models/Comments");
const { isAdmin } = require("../../../middleware/auth");



//Ruta para eliminar comentarios por parte del Admin
deleteComent.delete('/:id', isAdmin, async (req, res) =>{
    try {
        Comment.findByIdAndRemove(req.params.id, (error) => {
            res.status(200).send('Comentario  eliminado');
        });        
    } catch (error) {
        res.status(500).send(error);        
    }
});
//DELETE - http://localhost:3001/deleteComent/63cda3e3acfa8002f739839d --> id del comentario


module.exports = deleteComent;