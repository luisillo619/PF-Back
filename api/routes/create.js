const express = require("express");
//mi rama Luis
const Prueba = express.Router();

const Products = require("../models/Products.js");

Prueba.post('/ingresar', (req, res) => {
    Products.create(req.body, (error, datos) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(201).send(datos);
        }
    });
});

module.exports = Prueba;
