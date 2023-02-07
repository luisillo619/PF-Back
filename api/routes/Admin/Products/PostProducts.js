const express = require("express");
const postProduct = express.Router();
const Products = require("../../../models/Products");
const Categories = require("../../../models/Categories");
const { isAdmin } = require("../../../middleware/auth");

//Ruta para crear el producto

postProduct.post("/", async (req, res) => {
  try {
    const { name, price, description, category, image, promotion } = req.body;
    
    const categoryDB = await Categories.findOne({ category: category });

    if (!name || !price || !description || !category || !image) {
      return res.status(400).send("Faltan datos");
    }
    //utilizar un findOne para verificar si el producto ya está creado  -  IMPORTANTE NO OLVIDAR

    Products.create(
      {
        name,
        price,
        description,
        image,
        category: categoryDB._id,
        promotion
      },
      (error, datos) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(201).send(datos);
        }
      }
    );
  } catch (error) {
    console.log(error)
    res.status(500).send("Error interno del servidor.");
  }
});

module.exports = postProduct;
