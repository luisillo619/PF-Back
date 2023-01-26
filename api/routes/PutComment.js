const express = require("express");
const updateComent = express.Router();
const Comment = require("../models/Comments");
const { isUser } = require("../middleware/auth");

updateComent.use('/:id',isUser, (req, res) => {
    try {
        Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, datos) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).send(datos);
            }
        });
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
   
});
module.exports= updateComent;