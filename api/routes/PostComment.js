const express = require("express");
const postComent = express.Router();

const Comment = require("../models/Comments");  

postComent.use("/", async (req,res)=>{
    const { comment}=req.body;
    console.log(Comment)
    if ( !comment ) // valido para crear si falta un dato no permite crear 
      return res.status(400).json({ msg: "Faltan datos" });
      Comment.create(req.body, (error, datos) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(201).send(datos);
        }
    });

   
    
  })
  module.exports = postComent;