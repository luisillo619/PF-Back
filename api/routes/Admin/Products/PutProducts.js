const express = require("express");
const putProduct = express.Router();
const Products = require("../../../models/Products.js");
const { isAdmin } = require("../../../middleware/auth");
const Categories = require("../../../models/Categories");
//Ruta para modificar un producto
putProduct.put("/:id", isAdmin, async (req, res) => {
  try {
    const { idProduct, form } = req.body;
    console.log(idProduct)
    const {
      category,
      description,
      isDeleted,
      name,
      news,
      price,
      promotion,
      image,
    } = form;
    const categoryDB = await Categories.findOne({ category: category });

    Products.findByIdAndUpdate(
      idProduct,
      {
        category: categoryDB._id,
        description,
        image: image && image,
        isDeleted,
        name,
        news,
        price,
        promotion,
      },
      { new: true },
      (error, datos) => {
        if (error) {
          console.log(error);
          res.status(500).send(error);
        } else {
          res.status(200).send(datos);
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Error interno del servidor.");
  }
});

module.exports = putProduct;
