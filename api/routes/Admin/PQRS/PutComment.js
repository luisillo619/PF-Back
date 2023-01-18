const express = require("express");
const updateComent = express.Router();


const Comment = require("../../../models/Products.js");

updateComent.use('/:id', (req, res) => {
    
    Comment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, datos) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(datos);
        }
    });
});
module.exports= updateComent;