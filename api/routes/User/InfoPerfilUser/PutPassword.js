const express = require("express");
const user = require('../../../models/Users');
const jwt = require('jsonwebtoken');
const mailSettings = require('../../../additional/Nodemailer');
const bcrypt = require('bcrypt');
require('dotenv').config();
const { JWT_SECRET_KEY } = process.env;
const putPassword = express.Router();
const { isUser } = require("../../../middleware/auth");


putPassword.put('/', isUser, async (req, res) => {
    const { email } = req.body;
    console.log(req.body)
    try {
        // Validar que el correo electrónico existe en la base de datos
        const User = await user.findOne({ email: email });
        if (!User) {
            return res.status(404).send("Email not found");
        }
        // Crear un nuevo token con el id del usuario y la fecha de expiración del token
        const token = jwt.sign({ name: User.name, id: User._id }, JWT_SECRET_KEY, { expiresIn: '30m' });
        //Encriptar el token
        const hashedToken = await bcrypt.hash(token, 10);
        // Actualizar la fecha de expiración del token en el documento de usuario
        User.passwordResetToken = hashedToken;
        User.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutos
        await User.save();
        // Enviar un correo electrónico al usuario con un enlace para restablecer su contraseña
        const LinknewPassword = "http://localhost:3000/NewPassword/" + token;
        const transporter = mailSettings.transporter;
        const mailDetails = mailSettings.mailNewPassword(email, LinknewPassword);
        transporter.sendMail(mailDetails, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent');
            }
        });
        res.status(200).send("Email sent");
    } catch (error) {
        res.status(500).send("An error has ocurred");
    }
});
//PUT - http://localhost:3001/userPutPassword
//{ "email": "carlosmario.reyesp@gmail.com" }


module.exports = putPassword;