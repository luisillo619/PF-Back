const express = require("express");
const admin = express.Router();

const Products = require("../../../models/Products.js");

admin.use("/", async (req, res) => {
  // hacer un metodo findOrCreate para buscar o crear las categorias
  const updatedProduct = await Products.findOneAndUpdate(
    {name: name}, 
    {$set: {price: 10}}, 
    {new: true, upsert: true}
  );
 
  const { name, price, description, category, image } = req.body;
  if (!name || !price || !description || !category || !image)
    // valido para crear si falta un dato no permite crear
    return res.status(400).json({ msg: "Faltan datos" });

  Products.create(req.body, (error, datos) => {
    if (error) {
      res.status(500).send(error);
    } else {
 
      res.status(201).send(datos);
    }
  });
});
module.exports = admin;
