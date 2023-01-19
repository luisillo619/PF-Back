const express = require("express");
const postFav = express.Router();
const User = require('../../../models/Users');
const Favorites = require("../../../models/Favorites");

postFav.use('/', async (req, res) => {
  const newFavorite = new Favorites({
    user: req.body.user,
    product: req.body.product
  });

  newFavorite.save((err, favorite) => {
    if (err) {
      return res.status(500).send(err);
    }
    User.findByIdAndUpdate(req.body.user, { $push: { favorites: favorite._id } }, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send({ message: 'Producto agregado a favoritos' });
    });
  });
});




module.exports = postFav;