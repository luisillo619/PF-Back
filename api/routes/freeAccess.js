const express = require("express");
const Prueba = express.Router();

const Products = require("../models/Products.js");

Prueba.use("/", async (req, res) => {
 
  const products = await Products.find();
  
  res.status(200).send(products);
});

module.exports = Prueba;
