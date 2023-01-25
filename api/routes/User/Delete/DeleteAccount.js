const express = require("express");
const userDelete = express.Router();
const User = require("../../../models/Users.js");
const { isUser } = require("../../../middleware/auth");


//Ruta para eliminar la cuenta por parte del usuario
userDelete.delete('/:id', isUser, async (req, res) =>{
    try {
        User.findByIdAndRemove(req.params.id, (error) => {
            if (error) {
                res.status(500).send(error);
            }else {
                res.status(200).send('Usuario solicita eliminar account');
            }
        }); 
    } catch (error) {
        res.status(500).send('Error interno del servidor.');
    }
});
//POST a http://localhost:3001/userRegister { "userName": "CarlosMario", "email": "carlos@gmail.com", "password": "carlos123" } para crear un usuario                   63c8a8845fdcd142f4f6417c
//GET a http://localhost:3001/getUsers para consultar todos los usuarios
//DELETE a http://localhost:3001/deleteAccount/63c8b4268ad0a4159e7821a9


module.exports = userDelete;