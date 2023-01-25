const express = require("express");
const postFav = express.Router();
const User = require('../../../models/Users');
const Favorites = require("../../../models/Favorites");

postFav.use('/', async (req, res) => {
  const existingFavorite = await Favorites.findOne({ user: req.body.user, product: req.body.product });
  if (existingFavorite) {
    return res.status(400).send({ message: 'Este producto ya se encuentra en tus favoritos' });
  }
  const newFavorite = new Favorites({
    user: req.body.user,
    product: req.body.product
  });

  // el ususario tiene que hacer una peticion por una peticion
  newFavorite.save((err, favorite) => {
    if (err) {
      return res.status(500).send(err);
    }
    // posible cambio a id
    User.findByIdAndUpdate(req.body.user, { $push: { favorites: favorite._id } }, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send({ message: 'Producto agregado a favoritos' });
    });
  });
});




module.exports = postFav;