const express = require("express");
const getAddress = express.Router();        
const Address = require("../../../models/Address");  
const { isUser } = require("../../../middleware/auth");


//!REVISAR LA RUTA, CREEMOS QUE FALTA UN ID
//Ruta para traer 
getAddress.use("/", isUser, async (req, res) => {
  const adre = await Address.find();
  res.status(200).send(adre);
});


module.exports = getAddress;


// deleteAddres.use('/:id', isUser, async (req, res) =>{       //id de la dirección
//   try {
//       Addres.findByIdAndRemove(req.params.id, () => {
//           res.status(200).send({ message: 'Dirección eliminada'});
//       });
//   } catch (error) {
//       res.status(404).send('No se logro eliminar tu dirección.');
//       throw new Error('No se logro eliminar tu dirección.' + error.message);
//   }

// });
//DELETE - http://localhost:3001/deleteAddress/63ce187c4861c06c10b3a4b9 -->id de la dirección


// module.exports= deleteAddres;