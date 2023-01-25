const express = require("express");
const deleteUser = express.Router();
const User = require("../../../models/Users.js");
const { isAdmin } = require("../../../middleware/auth");


//Ruta para eliminar un usuario por parte del Admin
deleteUser.delete('/:id', isAdmin, async (req, res) =>{
    try {
        User.findByIdAndRemove(req.params.id, (error) => {
            if (error) {
                res.status(500).send(error);
            }else {
                res.status(200).send('Usuario eliminado');
            }
        });
    } catch (error) {
        res.status(500).send('Error interno del servidor.');
    }
});


module.exports = deleteUser; 