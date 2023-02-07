const express = require("express");
const Order = require("../../models/Order");
const Status = require("../../models/Status");
const User = require("../../models/Users");
const postOrder = express.Router();
const { auth } = require("../../middleware/auth");

postOrder.post("/", auth, async (req, res) => {
  try {
    const { product, user, amount, total, unitPrice, image } = req.body;
  
    const statusCart = await Status.findOne({
      status: "orderCart",
    });

    // amoun es la cantidad de productos de cada tipo
    // si el producto exite, no volverlo a agregar
    Order.findOne({ user: user, status: statusCart }, async (err, order) => {
      if (err) return res.status(500).send(err);

      if (!order) {
        order = await new Order({
          user,
          product: product,
          amount: [{ product, quantity: amount, unitPrice, image }],
          total,
          status: statusCart._id,
        });
        const userOrder = await User.findOne({ _id: user });
        userOrder.orders.push(order)
        await userOrder.save()
      } else {
        // actualiza la cantidad del producto especifico
        let productExists = false;
        order.amount.forEach((e) => {
          if ([e.product._id].join("") === product) {
            e.quantity = e.quantity + amount;
            productExists = true;
          }
        });

        if (!productExists) {
          order.amount.push({ product, quantity: amount, unitPrice, image });
          order.product.push(product);
        }
        order.total = order.total + total;
        order.status = statusCart._id;
      }
      order.save(async (err, updatedOrder) => {
        if (err) return res.status(500).send(err);
        const numberOfProductsInCart = updatedOrder.amount
          .map((e) => e.quantity)
          .reduce((a, b) => a + b);
        // console.log(updatedOrder);
        return res.status(200).send({ numberOfProductsInCart });
      });
    });
  } catch (error) {
    res.status(500).send("Error interno del servidor.");
  }
});

module.exports = postOrder;
