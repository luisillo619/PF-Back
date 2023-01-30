const express = require("express");
const user = require('../../../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { JWT_SECRET_KEY } = process.env;
const resetPassword = express.Router();
const { isUser } = require("../../../middleware/auth");


resetPassword.put('/:token', isUser, async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {
        // Descifrar el token
        const decryptedToken = jwt.verify(token, JWT_SECRET_KEY);
        // Buscar al usuario correspondiente en la base de datos
        const User = await user.findOne({ _id: decryptedToken.id });
        if (!User) {
            return res.status(404).send("User not found");
        }
        // Validar que el token no ha caducado
        if (Date.now() > user.passwordResetExpires) {
            return res.status(401).send("Token expired");
        }
        // Encriptar la nueva contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Actualizar la contraseña del usuario en la base de datos
        user.password = hashedPassword;
        user.passwordResetExpires = undefined;
        user.passwordResetToken = undefined;
        await User.save();
        res.status(200).send("Password updated");
    } catch (error) {
        res.status(500).send("An error has ocurred");
    }
});
//POST - http://localhost:3001/postPassword/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDMzOTg0ZmUxZWY5ZTlhNmU4MWRhZiIsImlhdCI6MTY3NDc4OTQzMywiZXhwIjoxNjc0NzkwMDMzfQ.zztyvJuFaVGcMQiytKkopvo3fO41IkUS3YvBUREGaiQ
//{ "password": "d2fv2xd6fv26dxf2bv." }


module.exports = resetPassword;