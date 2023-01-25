const express = require("express");
const postProduct = express.Router();
const Products = require("../../../models/Products.js");
const { isAdmin } = require("../../../middleware/auth");


//Ruta para crear el producto
postProduct.post("/", isAdmin ,async (req, res) => {
  try {
    const { name, price, description, category, image } = req.body;
    if (!name || !price || !description || !category || !image) {
      return res.status(400).send("Faltan datos");
    }
    //utilizar un findOne para verificar si el producto ya está creado  -  IMPORTANTE NO OLVIDAR
    Products.create(req.body, (error, datos) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(201).send(datos);
      }
    });
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});


module.exports = postProduct;