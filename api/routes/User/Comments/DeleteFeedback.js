const express = require("express");
const deleteFeedback = express.Router();
const Comment = require("../../../models/Comments");


deleteFeedback.use('/:id', async (req, res) =>{
    Comment.findByIdAndRemove(req.params.id, (error) => {
        if (error) { 
            res.status(500).send(error);
        }else {
            res.status(200).send({ message: 'Usuario elimina el comentario'});
        }
    });
});
//POST http://localhost:3001/postComent/63c845df062e77faa9b946f4 --> Primero creo un comentario JSON {"comment": "El producto es bueno"} con el id de un producto (63c845df062e77faa9b946f4)    
//Se genera un id para el comemtario (63c8b178f780fa0da4d279f9)
//DELETE http://localhost:3001/deleteFeedback/63c8b178f780fa0da4d279f9


module.exports = deleteFeedback;