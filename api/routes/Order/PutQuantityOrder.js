const express = require("express");
const putQuantity = express.Router();
const Order = require("../../models/Order");
const Status = require("../../models/Status");

putQuantity.put("/", async (req, res) => {
  // id usuario
  try {
    const { action, product, user, price } = req.body;

    const statusCart = await Status.findOne({
      status: "orderCart",
    });

    // PONER RESTRICCION CUANDO EL PRODUCTO NO EXITA
    const order = await Order.findOne({ user: user, status: statusCart });
    if (!order) return res.status(404).send("Order not found");

    // la orden si existe
    let productDelete = false;
    order.amount.forEach(async (e) => {
      // Aqui modifica un producto en especifico

      if ([e.product._id].join("") === product) {
        if (action === "increment") {
          e.quantity += 1;
        }
        if (action === "decrement") {
          e.quantity -= 1;
          if (e.quantity === 0) {
          
            productDelete = true;
          }
        }
      }
    //   else { return res.status(404).send("Product not found")};
    });

    if (action === "increment") order.total += price;
    if (action === "decrement") order.total -= price;

    if (productDelete) {
      const deleteProduct = order.product.filter((e) => {
        return [e].join("") !== product;
      });
      const deleteProductAmount = order.amount.filter((e) => {
        return [e.product].join("") !== product;
      });
      order.product = deleteProduct;
      order.amount = deleteProductAmount;
    }

    await order.save((err, updatedOrder) => {
      if (err) return res.status(500).send(err);
      res.send(updatedOrder);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = putQuantity;
