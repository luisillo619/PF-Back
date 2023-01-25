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