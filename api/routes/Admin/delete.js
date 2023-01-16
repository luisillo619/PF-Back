const express = require("express");
const { model } = require("mongoose");
const elimina = express.Router();

const Products = require("../../models/Products.js");

//  elimina.use('/:id', async (req, res) => {
//     console.log("req.params.name")
//     Products.findByIdAndRemove(req.params.id, (error) => {

//         if (error) {
//             res.status(500).send(error);
//         } else {
//             res.status(200).send({ message: 'Documento eliminado' });
//         }
//     });
// });
elimina.use('/:nombre', (req, res) => {
    console.log(req.params.nombre)
    Products.deleteOne({name: req.params.nombre}, (error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send({ message: 'Documento eliminado' });
        }
    });
})
module.exports = elimina;