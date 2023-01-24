const express = require('express');
const Order = require('../models/Order');

const order = express.Router();

order.use('/cart', async (req, res) => {
  try {
    const order = await Order.findOne({ user: req.user._id }).populate('products');
    res.render('cart', { order });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = order;