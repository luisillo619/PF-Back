const express = require("express");
const deleteOrder = express.Router();
const Order = require("../../models/Order");
const { auth } = require("../../middleware/auth");

// VERIFICAR UN POSIBLE PUT

//Ruta para eliminar un producto del carrito de compras
deleteOrder.use('/', auth, (req, res) => {
    try {
        const { product, order }= req.body
        Order.findByIdAndUpdate(order, { $pull: { product: product } }, (err) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.send('Producto elimano');
        });
    } catch (error) {
        res.status(500).send('Error interno del servidor.');
    }
});


module.exports= deleteOrder;