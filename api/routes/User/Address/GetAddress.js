const express = require("express");
const address = express.Router();
const Address = require("../../../models/Address");
const ObjectId = require("mongoose").Types.ObjectId;

// ISuser
address.get("/:id", async (req, res) => {
    try {
        const addresses = await Address.find({ user: req.params.id });
        
        if (!addresses) {
            return res.status(404).send("No se encontraron direcciones para este usuario.");
        }
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).send("Error al obtener las direcciones. " + error.message);
    }
});
//GET - http://localhost:3001/getAddress/63ce294a89ebe03748fa1f89 --> id del usuario
module.exports = address;