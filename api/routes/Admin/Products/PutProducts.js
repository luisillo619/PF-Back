const express = require("express");
const putProduct = express.Router();
const Products = require("../../../models/Products.js");
const { isAdmin } = require("../../../middleware/auth");


//Ruta para modificar un producto
putProduct.put('/:id', isAdmin, (req, res) => {
    try {
        Products.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, datos) => {
            if (error) {
                res.status(500).send(error);
            } else {
                res.status(200).send(datos);
            }
        });
    } catch (error) {
        res.status(500).send('Error interno del servidor.');
    }
});


module.exports= putProduct;