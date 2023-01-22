const express = require("express");
const Address = require("../../../models/Address");
const Users = require("../../../models/Users");
const postAddres = express.Router();

postAddres.use("/:id", async (req, res) => {
  const { Country, City, State, Street, ZipCode } = req.body;
  try {
    if (Country && City && State && Street && ZipCode)
      // valido para crear si falta un dato no permite crear

      return res.status(400).json({ msg: "Faltan datos" });

    const direccion = await Address.create(req.body);

    const direccionId = [direccion._id].join("");

    const updatedProduct = await Users.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { address: direccionId } },
      { new: true, upsert: true }
    );
    res.status(200).send(updatedProduct);
  } catch (error) {
    console.log(error);
  }
});

module.exports = postAddres;
