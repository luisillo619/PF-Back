const express = require("express");
const admin = express.Router();

const User = require("../../../models/Users.js");

admin.use('/:id', async (req, res) =>{
    User.findByIdAndRemove(req.params.id, (error) => {
        if (error) {
            res.status(500).send(error);
        }else {
            res.status(200).send({ message: 'Usuario eliminado'});
        }
    });

});

module.exports = admin;