const express = require("express");
const admin = express.Router();


const Products = require("../../../models/Products.js");

admin.use("/", async (req, res) => {
 
  const products = await Products.find();
  
  res.status(200).send(products);
});




// name":"Bottle Saver Gallonado",
//         "price": 60.00,
//         "description":"Alpaca, also known as german silver, bottle saver with ﻿Gallonado motifs.",
//         "image":"https://login.eltero.net/modules/products/uploads/product_40.jpeg",
//         "category
module.exports = admin;