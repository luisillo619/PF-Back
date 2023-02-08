const express = require("express"); //Express
const User = require("../models/Users"); //Importamos el modelo 'User', aquí le ponemos el mismo nombre
const bcrypt = require("bcrypt"); //Importamos la librería 'bcrypt' para encriptar las contraseñas de los usuarios antes de almacenarlas en la base de datos

const register = express.Router(); //Nombre para identificar la ruta de 'register'
const mailSettings = require("../additional/nodemailer");
require("dotenv").config();

// Genera el token de cada ususario en cada registro


register.post("/", async (req, res) => {
  try {
    const { userName, email, password, isAdmin } = req.body.form; //Traigo por destructuring el 'userName', 'email', 'password'

    if (userName && email && password) {
      //Si tengo 'userName' && 'email' && 'password'
      let userName2 = await User.findOne({ userName: userName }); //Esperamos respuesta de la búsqueda en el modelo 'User' que la propiedad 'userName' tenga el 'userName' pasado por body
      let userEmail2 = await User.findOne({ email: email }); //Esperamos respuesta de la búsqueda en el modelo 'User' que la propiedad 'email' tenga el 'email' pasado por body

      if (userEmail2 && userName2) {
        //Si tenemos tenemos datos en las variables anteriores 'userEmail2' y 'userName2'
        return res.status(400).send("Username and email already in use"); //Respondemos con error 404
      } else if (userEmail2) {
        //Si tenemos 'userEmail2' y no tenemos '!userName2'
        return res.status(400).send("Email already in use"); //Respondemos con error 404
      } else if (userName2) {
        //Si no tenemos '!userEmail2' y tenemos 'userName2'
        return res.status(400).send("Username already in use"); //Respondemos con error 404
      } else {
        //De lo contrario, es decir, si no hay 'userEmail2' y 'userName2'
        let admin;
        if (isAdmin === "True") admin = true;

        const user = new User({ userName, email, password, admin }); //Constante 'user' setea en el modelo 'User' el { userName, email, password }
        const salt = await bcrypt.genSalt(10); //Este es el encriptador
        user.password = await bcrypt.hash(user.password, salt); //De la variable 'user', tomamos la 'password' y hacemos hash con bcrypt a la 'password' para encriptarla

        await user.save(); //Esperamos para guardar en la variable 'user'
          //Y generamos un token con todo encriptado

        // res.send({ token, id: user._id }); //Respondemos con un 200 solo con el 'token' con todo codificado
        res.status(200).send("Account creada con éxito.");

        const transporter = mailSettings.transporter;
        const mailDetails = mailSettings.mailDetails(email);
        transporter.sendMail(mailDetails, (error, info) => {
          if (error) {
            console.log(error);
            return res
              .status(500)
              .send("Error al enviar email de confirmación");
          } else {
            return res.status(200).send("Account creada con éxito.");
          }
        });
      }
    } else {
      //De lo contrario
      return res.status(400).send("Datos incompletos"); //Respondemos con un 404 y su mensaje de error
    }
  } catch (error) {
    return res.status(500).send("Error en el servidor");
  }
});

module.exports = register;
