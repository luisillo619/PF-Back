const express = require("express");
const addres = express.Router();
                     
const Addres = require("../../../models/Address");        

addres.use("/", async (req, res) => {
 
  const adre = await Addres.find();
  
  res.status(200).send(adre);
});


module.exports = addres;                   
                           
 