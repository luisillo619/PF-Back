const express = require("express");
const Order = require("../../models/Order");
const Status = require("../../models/Status");
const User = require("../../models/Users");
const postOrder = express.Router();
const { auth } = require("../../middleware/auth");

//ISUSER

// OrderCar:{
//   Type: Boolean,
//   default: false,
// },
// OrderComplete:{
//   Type: Boolean,
//   default: false,
// },
// OrderCanceled:{
//   Type: Boolean,
//   default: false,
// },
// EL STATUS TIENE QUE LLEGAR CON UNO DE ESTOS 3 NOMBRES
//Ruta para agregar los productos al carrito del carrito de compras
postOrder.post("/", async (req, res) => {
  try {
    const { product, user, amount, total } = req.body;

    const statusCart = await Status.findOne({
      status: "orderCart",
    });

    Order.findOne({ user: user, status: statusCart }, async (err, order) => {
      if (err) return res.status(500).send(err);
      if (!order) {
        order = await new Order({
          user,
          product: [product],
          amount,
          total,
          status: statusCart._id,
        });
        await User.findOneAndUpdate({ _id: user }, { orders: order });
     
      } else {
        order.product.push(product);
        order.status = statusCart._id;
      }
      order.save(async (err, updatedOrder) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedOrder);
      });
    });

    // });
  } catch (error) {
    res.status(500).send("Error interno del servidor.");
  }
});

module.exports = postOrder;
