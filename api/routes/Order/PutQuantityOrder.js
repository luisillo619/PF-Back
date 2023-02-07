const express = require("express");
const putQuantity = express.Router();
const Order = require("../../models/Order");
const Status = require("../../models/Status");

putQuantity.put("/", async (req, res) => {
  // id usuario
 
  try {
    const { action, product, user, unitPrice } = req.body;

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

    if (action === "increment") order.total += unitPrice;
    if (action === "decrement") order.total -= unitPrice;

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
   
    // NO ELIMINAR LA ORDEN, SOLO CAMBIAR ALGUNA PROPIEDAD
    await order.save(async (err, updatedOrder) => {
      if (err) return res.status(500).send(err);
      const numberOfProductsInCart = updatedOrder.amount.length !== 0 ? updatedOrder.amount
          .map((e) => e.quantity)
          .reduce((a, b) => a + b): await Order.deleteOne({_id: order._id})

   
      res.send({updatedOrder,numberOfProductsInCart: numberOfProductsInCart ? numberOfProductsInCart : 0});
    });


  } catch (error) {
    console.log(error)
    res.status(500).send(error.message);
  }
});

module.exports = putQuantity;
