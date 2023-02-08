const express = require("express");
const deleteAddress = express.Router();
const Address = require("../../../models/Address");
const User = require("../../../models/Users");
const { isUser } = require("../../../middleware/auth");


// params id user
deleteAddress.delete('/:id/:addressId', isUser, (req, res) => {         //id es el id del usuario
    try {
      // const {} = req.body;
      Address.findByIdAndDelete({_id:req.params.addressId}, (err, address) => {
        console.log('Este ' + req.params.addressId)
        console.log(req.body)
          if (err) {
            return res.status(500).send(err);
          }
          User.findByIdAndUpdate({_id: req.params.id}, { $pull: { address: address._id } }, (err) => {
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