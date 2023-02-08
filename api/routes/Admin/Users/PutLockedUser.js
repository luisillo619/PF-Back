const express = require("express");
const { isAdmin } = require("../../../middleware/auth.js");
const Router = express.Router();
const User = require("../../../models/Users.js");


Router.put('/:id',isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }
    const isBlocked = !user.isBlocked;
    await User.findByIdAndUpdate(req.params.id, { isBlocked });
    res.send(`Usuario ${isBlocked ? 'bloqueado' : 'desbloqueado'} exitosamente`);
  } catch (err) {
    res.status(500).send('Error al modificar el estado de bloqueo del usuario');
  }
});

module.exports = Router;