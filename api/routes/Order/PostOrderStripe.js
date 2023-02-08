const express = require("express");
const postOrder = express.Router();
const Stripe = require("stripe")(process.env.SECRET_KEY_STRIP);
const Order = require("../../models/Order");
const Status = require("../../models/Status")
// id del ususario
postOrder.post("/", async (req, res) => {
  try {
    const { token, amount, user } = req.body;
    
    const statusCart = await Status.findOne({
      status: "orderCart",
    });
    console.log("cebolla")
    const statusComplete = await Status.findOne({
      status: "orderComplete",
    });
  
    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });

    // si la compra es correcta seguir, si no status 400
    const order = await Order.findOne({ user: user, status: statusCart });

if (!order) return res.status(404).send("Order not found");

order.status = statusComplete._id;

await order.save((err, updatedOrder) => {
if (err) return res.status(500).send(err);
console.log(updatedOrder);
res.send(updatedOrder);
});
  } catch (err) {
    console.log(err)
    res.status(500).send(err);
  }
});

module.exports = postOrder;
