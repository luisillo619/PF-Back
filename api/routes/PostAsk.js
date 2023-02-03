const express = require("express");
const postAsk = express.Router();

postAsk.post("/", async (req, res) => {
  
  try {
    const ask = req.body
     
    
    res.json(ask)
    // el ususario tiene que hacer una peticion por una peticion
   
  } catch (err) {
 
    res.status(500).send(err);
  }
});

module.exports = postAsk;