const express = require("express");
const postComment = express.Router();
const Users = require("../models/Users");
const Products = require("../models/Products");
const Comments = require("../models/Comments");
const { auth } = require("../middleware/auth");

postComment.post("/", async (req, res) => {
  try {
    const { user, product, comment, rating } = req.body;
    console.log( user, product, comment, rating )
    const newComment = new Comments({
      user,
      product,
      comment,
      rating,
    });

    // el ususario tiene que hacer una peticion por una peticion
    newComment.save((err, comment) => {
      if (err) {
        return res.status(500).send(err);
      }
      // posible cambio a id
      Users.findByIdAndUpdate(
        req.body.user,
        { $push: { comments: comment._id } },
        (err) => {
          if (err) {
            return res.status(500).send(err);
          }
        }
      );

      Products.findByIdAndUpdate(
        req.body.products,
        { $push: { comments: comment._id } },
        (err) => {
          if (err) {
            return res.status(500).send(err);
          }
        }
      );
      return res.send(comment);
    });
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

module.exports = postComment;
