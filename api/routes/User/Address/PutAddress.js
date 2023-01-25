const express = require("express");
const putAddress= express.Router();
const Address = require("../../../models/Address");
const { isUser } = require("../../../middleware/auth");


//!REVISAR
//Ruta para modificar una dirección del usuario
putAddress.use("/:id", isUser, (req, res) => {  //id de la dirección
  try {
    Address.findByIdAndUpdate(
      req.params.id, req.body,
      { new: true }, (error, datos) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send(datos);
        }
      }
    );
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
}); 


module.exports = putAddress;




// const express = require("express");
// const Address = require("../../../models/Address");
// const Users = require("../../../models/Users");
// const putAdress= express.Router();

// putAdress.use("/:userId/:addressId", async (req, res) => {
//     try {
//         // Verificamos si existe el usuario
//         const user = await Users.findById(req.params.userId);
//         if (!user) {
//             return res.status(404).send({ msg: "No se encontró el usuario." });
//         }
//         // Buscamos y actualizamos la dirección específica
//         const address = await Address.findOne({user: req.params.userId, _id: req.params.addressId});
//         if (!address) {
//             return res.status(404).send({ msg: "No se encontró la dirección." });
//         }
//         address.Country = req.body.Country;
//         address.City = req.body.City;
//         address.State = req.body.State;
//         address.Street = req.body.Street;
//         address.ZipCode = req.body.ZipCode;
//         await address.save();
//         res.status(200).send(address);
//     } catch (error) {
//       res.status(404).send('No se logró actualizar tu dirección.');
//       throw new Error('No se logró actualizar tu dirección.' + error.message);
//     }
// });
// //PUT - a http://localhost:3001/putAddress/63cb884fb9589559482c110d/63cbf717eebef06fe8fbf9c7
// //                                            id del usuario        +       id de la address
// //{ "Country": "kakaroto", "City": "kakaroto City", "State": "kakaroto State", "Street": "kakaroto kakaroto", "ZipCode": 2000, "User": "63ce0c100ecad4df6985cecd" }


// module.exports = putAdress;