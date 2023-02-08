const express = require("express");                       
const getProductId = express.Router();                           
const Products = require("../models/Products.js");  

// PENDIENTE DE ELIMINAR
getProductId.get("/:id/:idProduct", async(req,res)=>{
  try {
  
    const product = await Products.findOne({_id: req.params.idProduct}).populate("category");
    if(product){
      res.status(200).json(product)
    }
    else  res.status(404).send('producto no encontrado')
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
    
  });

  module.exports= getProductId;