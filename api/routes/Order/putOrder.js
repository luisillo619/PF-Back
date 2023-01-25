const express = require("express");
const updateOrder = express.Router();


const Order = require("../../models/Order");

updateOrder.use('/', (req, res) => {
    const {product, order}=req.body
    Order.findByIdAndUpdate(order, { $pull: { product: product } }, (err) => {
        if (err) {
            return res.status(500).send(err);
          }
          return res.send({ message: 'Producto Actualizado' });
    });
});
module.exports= updateOrder;