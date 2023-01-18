const express = require("express");
const coment = express.Router();
                      //Ruta administrador
const Comment = require("../../../models/Comment");        //Model


coment.use("/", async (req, res) => {
 
  const users = await Comment.find();
  
  res.status(200).send(users);
});


module.exports = coment;