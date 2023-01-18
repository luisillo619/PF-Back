const express = require("express");
const deleteComent = express.Router();

const Comment = require("../../../models/Comment");

deleteComent.use('/:id', async (req, res) =>{
    Comment.findByIdAndRemove(req.params.id, (error) => {
        if (error) {
            res.status(500).send(error);
        }else {
            res.status(200).send({ message: 'Comentario  eliminado'});
        }
    });

});
module.exports = deleteComent;