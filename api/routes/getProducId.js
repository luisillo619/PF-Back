const express = require("express");                       //Express
const producId = express.Router();                           //Ruta administrador
const Products = require("../models/Products.js");  //Model

producId.use("/:id", async(req,res)=>{
    const id = req.params.id;
    const products = await Products.find();
    if(id){
      const idProducts= await products.filter((el) =>el.id == id);
      products.length ?
      res.status(200).send(idProducts):
      res.status(404).send('No existe un perro con ese id')
    }
  });

  module.exports=producId;