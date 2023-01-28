const express = require("express");                       
const getProducId = express.Router();                           
const Products = require("../models/Products.js");  

// PENDIENTE DE ELIMINAR
getProducId.get("/:id", async(req,res)=>{
  try {
    const id = req.params.id;
    const products = await Products.find();
    if(id){
      const idProducts= await products.filter((el) =>el.id == id);
      products.length ?
      res.status(200).send(idProducts[0]):
      res.status(404).send('No existe un perro con ese id')
    }
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
    
  });

  module.exports= getProducId;