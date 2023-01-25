const express = require("express");                       //Express
const admin = express.Router();                           //Ruta administrador
const Products = require("../models/Products.js");  //Model


admin.use("/", async (req, res) => {
  console.log(req.user)
  const products = await Products.find({}).populate("category").exec();
  const response = products.filter(e => e.isDeleted === false)
  res.status(200).send(response);
});




// name":"Bottle Saver Gallonado",
//         "price": 60.00,
//         "description":"Alpaca, also known as german silver, bottle saver with ﻿Gallonado motifs.",
//         "image":"https://login.eltero.net/modules/products/uploads/product_40.jpeg",
//         "category
module.exports = admin;