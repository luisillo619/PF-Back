const express = require("express"); //Express
const admin = express.Router(); //Ruta administrador
const Categories = require("../models/Categories.js"); //Model

admin.use("/", async (req, res) => {
  const categories = await Categories.find();

  res.status(200).send(categories);
});

module.exports = admin