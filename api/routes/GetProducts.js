const express = require("express");
const getProducts = express.Router();
const Products = require("../models/Products.js");

// Ruta para obtener todas los Productos
getProducts.get("/", async (req, res) => {
  try {
    const products = await Products.find({}).populate("category").exec();
    const response = products.filter((e) => e.isDeleted === false);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

// name":"Bottle Saver Gallonado",
//         "price": 60.00,
//         "description":"Alpaca, also known as german silver, bottle saver with ﻿Gallonado motifs.",
//         "image":"https://login.eltero.net/modules/products/uploads/product_40.jpeg",
//         "categorys
module.exports = getProducts;
