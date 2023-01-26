const express = require("express"); //Express
const getCategories = express.Router(); //Ruta administrador
const Categories = require("../models/Categories.js"); //Model

// Ruta para obtener todas las categorias
getCategories.get("/", async (req, res) => {
  try {
    const categories = await Categories.find();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
 
});

module.exports = getCategories;
