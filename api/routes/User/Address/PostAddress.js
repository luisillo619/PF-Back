const express = require("express");
const Address = require("../../../models/Address");
const Users = require("../../../models/Users");
const postAddress = express.Router();
const { isUser } = require("../../../middleware/auth");
//Ruta para crear una drección del usuario

postAddress.post("/:id",  async (req, res) => {
  try {
    const { country, city, state, street, zipCode } = req.body;
    if (!country  || !city || !state || !street || !zipCode) {
      return res.status(400).json("Faltan datos");
    }
    const address = await Address.create({
      country, city, state, street, zipCode, user: req.params.id
    });
    const addressId = [address._id].join("");
    const updatedUsers = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { address: addressId } },
      { new: true, upsert: true }
    );
    address.save()
    res.status(200).send(updatedUsers);
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});
module.exports = postAddress;