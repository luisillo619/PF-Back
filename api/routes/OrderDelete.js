const express = require('express');
const Products = require('../models/Products');
const Order = require('../models/Order');
const order = express.Router();


order.delete('/orders/:orderId/products/:productId', async (req, res) => {
    try {
      const order = await Order.findById(req.params.orderId);
      order.products.id(req.params.productId).remove();
      await order.save();
      res.json(calculateTotals(order));
    } catch (err) {
      res.json({ message: err });
    }
  });

  const calculateTotals = (order) => {
    const subtotal = order.products.reduce((acc, product) => acc + product.price, 0);
    const total = subtotal;
    order.subtotal = subtotal;
    order.total = total;
    return order;
  }
