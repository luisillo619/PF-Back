const express = require("express");
const Address = require("../../../models/Address");
const Users = require("../../../models/Users");
const postAddress = express.Router();
const { isUser } = require("../../../middleware/auth");


//Ruta para crear una drección del usuario
postAddress.post("/:id", isUser, async (req, res) => {
  try {
    const { Country, City, State, Street, ZipCode } = req.body;
    if (Country && City && State && Street && ZipCode) {
      return res.status(400).json("Faltan datos");
    }

    const address = await Address.create(req.body);
    const addressId = [address._id].join("");
    const updatedUsers = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { address: addressId } },
      { new: true, upsert: true }
    );
    res.status(200).send(updatedProduct);
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});


module.exports = postAddress;