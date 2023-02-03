const express = require("express");
const deleteProduct = express.Router();
const Products = require("../../../models/Products.js");
const { isAdmin } = require("../../../middleware/auth");

//Ruta para eliminar el producto
deleteProduct.use("/:id", isAdmin, async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) return res.status(404).send("Producto no encontrado.");

    product.isDeleted = !product.isDeleted;
    await product.save();
    res.send("Producto Fuera de Inventario");
  } catch (error) {
    res.status(500).send("Error interno del servidor.");
  }
});

module.exports = deleteProduct;
