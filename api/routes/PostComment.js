const express = require("express");
const postComment = express.Router();
const Users = require('../models/Users');
const Products = require("../models/Products")
const Comments = require("../models/Comments");
const { auth } = require("../middleware/auth");

postComment.post('/',auth, async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send('Error en el servidor');
  }
  
});




module.exports = postComment;
  