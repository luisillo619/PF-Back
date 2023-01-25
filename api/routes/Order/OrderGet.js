const express = require('express');
const Order = require('../../models/Order');
const route = express.Router();

route.use('/:id', (req, res) => {
    const { id } = req.params;
    Order.findOne({ user: id })
      .exec((err, order) => {
        if (err) return res.status(500).send(err);
        return res.send(order);
      });
  });

  module.exports = route;