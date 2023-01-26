const express = require("express");
const deleteFav = express.Router();
const User = require('../../../models/Users');
const Favorites = require("../../../models/Favorites");
const { isUser } = require("../../../middleware/auth");
//Ruta para eliminar un favorito

deleteFav.delete('/:id', isUser, (req, res) => {
  try {
    Favorites.findByIdAndDelete(req.params.id, (err, favorite) => {
      if (err) {
        return res.status(500).send(err);
      }
      User.findByIdAndUpdate(favorite.user, { $pull: { favorites: favorite._id } }, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.send('Producto eliminado de favoritos');
      });
    });
  } catch (error) {
    res.status(500).send('Error interno del servidor.');
  }
});
module.exports = deleteFav;