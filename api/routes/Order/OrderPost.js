const express = require('express');
const Order = require('../../models/Order');
const Products = require('../../models/Products');
const route = express.Router();

route.use('/', async (req, res) => {

  const { product, user, amount,total} = req.body;
  const existingProduct = await Order.findOne({ 'product': product });
  if (existingProduct) {
    return res.status(400).send("Este producto ya existe en el pedido");
  }
  
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
});


  module.exports = route;