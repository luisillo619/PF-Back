const express = require("express");
const getFav = express.Router();
const User = require('../../../models/Users');

getFav.use('/:id', (req, res) => {
   User.findById(req.params.id).populate('favorites').exec((err, user) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(user.favorites);
    });
  });


  module.exports = getFav;