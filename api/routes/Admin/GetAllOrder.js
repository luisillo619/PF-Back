const Order = require('../../models/Order');
const Status = require("../../models/Status");
const express = require("express");
const getOrder = express.Router();
const { isAdmin } = require("../../middleware/auth");

getOrder.get('/:id', isAdmin, async (req, res) => {
  try {
    const statusCart = await Status.findOne({ status: "orderCart" });

    Order.find().populate("user").exec((err, orders) => {
      if (err) return res.status(500).send(err);
       
      return res.status(200).send(orders);
    });
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});

module.exports = getOrder;