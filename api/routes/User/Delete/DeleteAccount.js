const express = require("express");
const userDelete = express.Router();
const User = require("../../../models/Users.js");


userDelete.use('/:id', async (req, res) =>{
    User.findByIdAndRemove(req.params.id, (error) => {
        if (error) {
            res.status(500).send(error);
        }else {
            res.status(200).send({ message: 'Usuario solicita eliminar account'});
        }
    });
});
//POST a http://localhost:3001/userRegister { "userName": "CarlosMario", "email": "carlos@gmail.com", "password": "carlos123" } para crear un usuario                   63c8a8845fdcd142f4f6417c
//GET a http://localhost:3001/getUsers para consultar los usuarios
//DELETE a http://localhost:3001/deleteAccount/63c8b4268ad0a4159e7821a9


module.exports = userDelete;