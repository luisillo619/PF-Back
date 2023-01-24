const express = require('express');
const Order = require('../models/Order');
const route = express.Router();

route.use('/', (req, res) => {
  const { products, user } = req.body;
  Order.findOne({ user: user }, (err, order) => {
    if (err) return res.status(500).send(err);
    if (!order) {
      order = new Order({
        user: user,
        products: [products]
      });
    } else {
      order.items.push(products);
    }
    order.save((err, updatedOrder) => {
      if (err) return res.status(500).send(err);
      return res.send(updatedOrder);
    });
  });
});


  module.exports = route;