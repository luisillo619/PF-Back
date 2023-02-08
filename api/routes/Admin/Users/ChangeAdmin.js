const express = require("express");
const adminChangeUser = express.Router();
const Users = require("../../../models/Users");
const { isAdmin } = require("../../../middleware/auth")



// ruta change admin
adminChangeUser.put('/:id', isAdmin, async (req, res) =>{
    try {
        const user = await Users.findById(req.params.id)
        if (!user) return res.status(404).send('Usuario no encontrado//');
        user.admin = !user.admin
        await user.save((err, updatedOrder) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(updatedOrder);
        });
    } catch (error) {
        res.status(500).send('Error interno del servidor.');
    }
});

module.exports = adminChangeUser