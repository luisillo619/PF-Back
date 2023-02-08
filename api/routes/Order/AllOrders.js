const express = require("express");
const Order = require("../../models/Order");
const allOrders = express.Router();
const { isUser } = require("../../middleware/auth");

allOrders.get("/:id", isUser, async (req, res) => {
  try {
    const order = await Order.find({ user: req.params.id }).populate("status");

    if (!order) {
      return res.status(404).send({ error: "No orders found for this user" });
    }
    console.log("Order after if statement:", order);
    res.status(200).send(order);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Server error" });
  }
});

module.exports = allOrders;
