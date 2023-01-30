const express = require("express");
const PutLockedUser = express.Router();
const User = require("../../../models/Users.js");

PutLockedUser.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }
        if(user.isBlocked) {
            return res.status(409).send('El usuario ya esta bloqueado');
        }
        await User.findByIdAndUpdate(req.params.id, { isBlocked: true });
        res.send('Usuario bloqueado exitosamente');
    } catch (err) {
        res.status(500).send('Error al bloquear al usuario');
    }
});

module.exports = PutLockedUser;