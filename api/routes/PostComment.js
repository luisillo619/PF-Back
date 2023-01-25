// const express = require("express");
// const postComent = express.Router();

// const Comment = require("../models/Comments");  

// postComent.use("/", async (req,res)=>{
//     const { comment}=req.body;
//     console.log(Comment)
//     if ( !comment ) // valido para crear si falta un dato no permite crear 
//       return res.status(400).json({ msg: "Faltan datos" });
//       Comment.create(req.body, (error, datos) => {
//         if (error) {
//             res.status(500).send(error);
//         } else {
//             res.status(201).send(datos);
//         }
//     });

   
    
//   })
//   module.exports = postComent;

const express = require("express");
const postComment = express.Router();
const Users = require('../models/Users');
const Products = require("../models/Products")
const Comments = require("../models/Comments");

postComment.use('/', async (req, res) => {
  const newComment = new Comments({
    user: req.body.user,
    products: req.body.products,
    comment: req.body.comment,
    rating: req.body.rating
  });

  // el ususario tiene que hacer una peticion por una peticion
  newComment.save((err, comment) => {
    if (err) {
      return res.status(500).send(err);
    }
    // posible cambio a id
    Users.findByIdAndUpdate(req.body.user, { $push: { comments: comment._id } }, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    Products.findByIdAndUpdate(req.body.products, { $push: { comments: comment._id } }, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });
    return res.send({ message: 'Comentario agregado' });
  });
});




module.exports = postComment;
  