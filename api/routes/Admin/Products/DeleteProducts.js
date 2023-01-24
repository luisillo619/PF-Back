const express = require("express");
const { model } = require("mongoose");
const admin = express.Router();
const { auth, isUser, isAdmin } = require("../../../middleware/auth");
const Products = require("../../../models/Products.js");

//  elimina.use('/:id', async (req, res) => {
//     console.log("req.params.name")
//     Products.findByIdAndRemove(req.params.id, (error) => {

//         if (error) {
//             res.status(500).send(error);
//         } else {
//             res.status(200).send({ message: 'Documento eliminado' });
//         }
//     });
// });

admin.use('/:nombre',isAdmin, (req, res) => {

    console.log(req.params.nombre)
    Products.deleteOne({name: req.params.nombre}, (error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send({ message: 'Documento eliminado' });
        }
    });
})

admin.use('/:id', async (req, res) => {
    // busca el producto a eliminar
    const product = await Products.findById(req.params.id);
    if (!product) return res.status(404).send('Producto no encontrado.');
    // marca el producto como eliminado
    product.isDeleted = true;
    await product.save();
    // devuelve una respuesta
    res.send('Producto Fuera de Inventario');
});





module.exports = admin;