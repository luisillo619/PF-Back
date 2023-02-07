const express = require("express");
const Address = require("../../../models/Address");
const Users = require("../../../models/Users");
const putAdress= express.Router();


// isUser
putAdress.use("/:userId/:addressId", async (req, res) => {
    try {
        // Verificamos si existe el usuario
        const user = await Users.findById(req.params.userId);
        if (!user) {
            return res.status(404).send({ msg: "No se encontró el usuario." });
        }
        // Buscamos y actualizamos la dirección específica
        const address = await Address.findOne({user: req.params.userId, _id: req.params.addressId});
        if (!address) {
            return res.status(404).send({ msg: "No se encontró la dirección." });
        }
        address.country = req.body.country;
        address.city = req.body.city;
        address.state = req.body.state;
        address.street = req.body.street;
        address.zipCode = req.body.zipCode;
        await address.save();
        res.status(200).send(address);
    } catch (error) {
      res.status(404).send('No se logró actualizar tu dirección.');
      throw new Error('No se logró actualizar tu dirección.' + error.message);
    }
});
//PUT - a http://localhost:3001/putAddress/63cb884fb9589559482c110d/63cbf717eebef06fe8fbf9c7
//                                            id del usuario        +       id de la address
//{ "country": "Kakaroto", "city": "Kakaroto City", "state": "Kakaroto State", "street": "Kakaroto Calle", "zipCode": 2000, "user": "63ce0c100ecad4df6985cecd" }


module.exports = putAdress;