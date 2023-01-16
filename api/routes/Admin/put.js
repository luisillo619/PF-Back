const express = require("express");
const put = express.Router();
//const putName= express.Router();


const Products = require("../../models/Products.js");

put.use('/:id', (req, res) => {
    
    Products.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, datos) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(datos);
        }
    });
});
// putName.use('/:nombre', (req, res) => {
//     console.log("Hola")
//     Products.updateOne({name: req.params.nombre}, req.body, {new: true}, (error, datos) => {
//         if (error) {
//             res.status(500).send(error);
//         } else {
//             res.status(200).send(datos);
//         }
//     });
// });

module.exports= put;