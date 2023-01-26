const express = require("express");
const User = require('../../../models/Users');
const postFav = express.Router();
const Favorites = require("../../../models/Favorites");
const { isUser } = require("../../../middleware/auth");

// Ruta para agregar un producto a favoritos
postFav.post('/:id', isUser, async (req, res) => {
  try {
    const newFavorite = new Favorites({
      user: req.body.user,
      product: req.body.product
    });
    const existingFavorite = await Favorites.findOne({ user: req.body.user, product: req.body.product });
    if (existingFavorite) {
      return res.status(400).send('Este producto ya se encuentra en tus favoritos');
    }
    newFavorite.save((err, favorite) => {
      if (err) {
        return res.status(500).send(err);
      }
      User.findByIdAndUpdate(req.body.user, { $push: { favorites: favorite._id } }, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.send( 'Producto agregado a favoritos' );
      });
    });
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});
module.exports = postFav;