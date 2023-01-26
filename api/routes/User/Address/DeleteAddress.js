const express = require("express");
const deleteAddress = express.Router();
const Address = require("../../../models/Address");
const User = require("../../../models/Users");

// ISUSER

deleteAddress.delete('/:id', (req, res) => {         //id de la address
    try {
        Address.findByIdAndDelete(req.params.id, (err, address) => {
            if (err) {
              return res.status(500).send(err);
            }
            User.findByIdAndUpdate(address.user, { $pull: { address: address._id } }, (err) => {
              if (err) {
                return res.status(500).send(err);
              }
              return res.send('Dirección eliminado de address y users');
            });
          });
    } catch (error) {
        res.status(500).send('No se logró eliminar tu dirección.');
    }
});
module.exports= deleteAddress;