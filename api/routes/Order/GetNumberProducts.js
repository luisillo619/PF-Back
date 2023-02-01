const express = require("express");
const Order = require("../../models/Order");
const getOrder = express.Router();
const { isUser } = require("../../middleware/auth");

// AUTH
//Ruta para traer todas las ordenes hechas por el usuario en el carrito de compras

//AGREGAR LO DE AUTH Y TIENE QUE VENIR POR CABECERA
getOrder.get("/:id", (req, res) => {
  try {
    const { id } = req.params; //id del usuario
    Order.findOne({ user: id }).exec((err, order) => {
      if (err) return res.status(500).send(err);
      if (order) {
        return res
          .status(200)
          .send({ numberOfProductsInCart: order.product.length });
      } else
        res.status(404).send({ numberOfProductsInCart: 0 });
    });
  } catch (error) {
    res.status(500).send("Error interno del servidor.");
  }
});

module.exports = getOrder;
