const express = require('express');
const Order = require('../../models/Order');
const getOrder = express.Router();
const { isUser } = require("../../middleware/auth");

// AUTH
//Ruta para traer todas las ordenes hechas por el usuario en el carrito de compras
getOrder.get('/:id', isUser, (req, res) => {
  try {
    const { id } = req.params;      //id del usuario
    Order.findOne({ user: id }) .exec((err, order) => {
      if (err) return res.status(500).send(err);
      return res.send(order);
    });
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});


module.exports = getOrder;