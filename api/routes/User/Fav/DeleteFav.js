const express = require("express");
const deleteFav = express.Router();
const User = require('../../../models/Users');
const Favorites = require("../../../models/Favorites");


//delete one
deleteFav.use('/:id', (req, res) => {
    Favorites.findByIdAndDelete(req.params.id, (err, favorite) => {
      if (err) {
        return res.status(500).send(err);
      }
      User.findByIdAndUpdate(favorite.user, { $pull: { favorites: favorite._id } }, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.send({ message: 'Producto eliminado de favoritos' });
      });
    });
  });
  
  module.exports = deleteFav;