const express = require('express');
const Order = require('../../models/Order');
const getOrder = express.Router();
//const { isUser } = require("../../middleware/auth");
const Status = require("../../models/Status")
// AUTH
//Ruta para traer todas las ordenes hechas por el usuario en el carrito de compras

//AGREGAR LO DE AUTH Y TIENE QUE VENIR POR CABECERA
getOrder.get('/:id',async (req, res) => {
  try {
    const statusCart = await Status.findOne({
      status: "orderCart",
    });

    const { id } = req.params;      //id del usuario
    Order.findOne({ user: id, status: statusCart }).exec((err, order) => {
      if (err) return res.status(500).send(err);
       
      return res.status(200).send(order);
    });
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});


module.exports = getOrder;