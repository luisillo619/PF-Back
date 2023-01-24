const express = require("express");
const admin = express.Router();
const Products = require("../../../models/Products.js");
const { auth, isUser, isAdmin } = require("../../../middleware/auth");

admin.use("/", isAdmin ,async (req, res) => {
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

