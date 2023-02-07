const express = require("express");
const Address = require("../../../models/Address");
const Users = require("../../../models/Users");
const postAddress = express.Router();
const { isUser } = require("../../../middleware/auth");


//Ruta para crear una drección del usuario
postAddress.post("/:id", isUser, async (req, res) => {
  try {
    const { country, city, state, street, zipCode } = req.body;
    if (!country  || !city || !state || !street || !zipCode) {
      return res.status(400).json("Faltan datos");
    }
    const address = await Address.create(
      { country, city, state, street, zipCode, user: req.params.id }
    );
    const addressId = [address._id].join("");
    
    const updatedUsers = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { address: addressId } },
      { new: true, upsert: true }
    );
    address.save();
    res.status(200).send(updatedUsers);
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});
//POST - http://localhost:3001/postAddress/63ce0c100ecad4df6985cecd --> id del usuario
//{ "country": "Kame House", "city": "Kame House City", "state": "Kame House State", "street": "Calle Kame House", "zipCode": 2000, "user": "63e04615c17a3e5e6b0fcfc2" }


module.exports = postAddress;