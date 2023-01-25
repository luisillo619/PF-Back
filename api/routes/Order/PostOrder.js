const express = require('express');
const Order = require('../../models/Order');
const postOrder = express.Router();
const { auth } = require("../../middleware/auth");


//Ruta para agregar los productos al carrito
postOrder.post('/', auth, async (req, res) => {
  try {
    const { product, user, amount,total } = req.body;

    Order.findOne({ user: user }, (err, order) => {
      if (err) return res.status(500).send(err);
      if (!order) {
        order = new Order({
          user: user,
          product: [product],
          amount,
          total
        });
      } else {
        order.product.push(product);
      }
      order.save((err, updatedOrder) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedOrder);
      });
    });
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});


module.exports = postOrder;