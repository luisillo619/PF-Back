const express = require("express");
const deleteAddress = express.Router();
const Address = require("../../../models/Address");
const { isUser } = require("../../../middleware/auth");
//!REVISAR LA RUTA, FALTA ELIMINAR LA DIRECCION DEL MODEL 'USER'
//Ruta para eliminar una dirección del usuario
deleteAddress.delete('/:id', isUser, async (req, res) => {
    try {
        Address.findByIdAndRemove(req.params.id, (error) => {
            if (error) {
                res.status(500).send(error);
            }else {
                res.status(200).send('Eliminado la informacion');
            }
        });
    } catch (error) {
        res.status(500).send('Error interno del servidor.');
    }
});
module.exports= deleteAddress;