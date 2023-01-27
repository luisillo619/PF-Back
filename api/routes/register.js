const express = require("express");                                                   //Express
const User = require("../models/Users");                                              //Importamos el modelo 'User', aquí le ponemos el mismo nombre
const bcrypt = require("bcrypt");                                                     //Importamos la librería 'bcrypt' para encriptar las contraseñas de los usuarios antes de almacenarlas en la base de datos
const jwt = require("jsonwebtoken");                                                  //'jwt' codifica y decodificar de manera segura información en formato JSON para la autenticación y la autorización en aplicaciones web, para que el usuario pueda navegar de forma segura en nuestro sitio web
const register = express.Router();                                                    //Nombre para identificar la ruta de 'register'
require('dotenv').config();                                                           //Variables de entorno
const mailSettings = require("../additional/Nodemailer");                             //Librería Nodemailer

// Genera el token de cada ususario en cada registro
const generateAuthToken = (user) => {                                                 //La función "generateAuthToken" recibe como parámetro un objeto llamado "user"
  const jwtSecretKey = process.env.JWT_SECRET_KEY;                                    //"jwtSecretKey" es una cadena de caracteres utilizada como clave secreta para codificar el token JWT
  const token = jwt.sign(                                                             //'token' contiene la función "sign()" de la librería 'jwt' para codificar el objeto JSON que contiene información del usuario
    {
      _id: user._id,                                                                  //'id' del usuario
      name: user.userName,                                                            //'name' del usuario
      email: user.email,                                                              //'email' del usuario
      isAdmin: user.admin,                                                            //Información de si es 'administrador' o no
    },
    jwtSecretKey                                                                      //El objeto JSON es firmado con la clave secreta 'jwtSecretKey' antes generada
  );
  return token;                                                                       //Finalmente, la función devuelve el 'token' generado.
};
    
register.post("/", async (req, res) => {
  try {
    const { userName, email, password, isAdmin } = req.body;                            //Traigo por destructuring el 'userName', 'email', 'password'
    if (userName && email && password) {                                                //Si tengo 'userName' && 'email' && 'password'
      //Si tengo 'userName' && 'email' && 'password'
      let userName2 = await User.findOne({ userName: userName });                       //Esperamos respuesta de la búsqueda en el modelo 'User' que la propiedad 'userName' tenga el 'userName' pasado por body
      let userEmail2 = await User.findOne({ email: email });                            //Esperamos respuesta de la búsqueda en el modelo 'User' que la propiedad 'email' tenga el 'email' pasado por body 
      
      //Si tenemos tenemos datos en las variables anteriores 'userEmail2' y 'userName2'
      if (userEmail2 && userName2) {                                                    //Si tenemos tenemos datos en las variables anteriores 'userEmail2' y 'userName2'
        res.status(404).send("Username and email already in use");                      //Respondemos con error 404
      } else if (userEmail2 && !userName2) {                                            //Si tenemos 'userEmail2' y no tenemos '!userName2'
        res.status(404).send("Email already in use");                                   //Respondemos con error 404
      } else if (!userEmail2 && userName2) {                                            //Si no tenemos '!userEmail2' y tenemos 'userName2'
        res.status(404).send("Username already in use");                                //Respondemos con error 404
      } else {                                                                          //De lo contrario, es decir, si no hay 'userEmail2' y 'userName2'
        let admin;
        if(isAdmin === "True") admin = true
        
        const user = new User({ userName, email, password, admin });                    //Constante 'user' setea en el modelo 'User' el { userName, email, password }
        const salt = await bcrypt.genSalt(10);                                          //Este es el encriptador
        user.password = await bcrypt.hash(user.password, salt);                         //De la variable 'user', tomamos la 'password' y hacemos hash con bcrypt a la 'password' para encriptarla
        console.log(user);
        await user.save();                                                              //Esperamos para guardar en la variable 'user'
        const token = generateAuthToken(user);                                          //Y generamos un token con todo encriptado
        const transporter = mailSettings.transporter;
        const mailDetails = mailSettings.mailDetails(email);
        transporter.sendMail(mailDetails, (error, info) => {
          if (error) {
            console.log(error);
            res.status(404).send("Error al enviar email de confirmación");
          } else {
            console.log("Account creada con éxito.");
            res.send({token});                                                          //Respondemos con un 200 solo con el 'token' con todo codificado
          }
        });
      }
    } else {                                                                            //De lo contrario
      res.status(404).send("Datos incompletos");                                      //Respondemos con un 404 y su mensaje de error
    }
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});


module.exports = register;
//POST - http://localhost:3001/register
//Crear usuario administrador { "userName": "CarlosM", "email": "carlos@gmail.com", "password": "df6g6fdv6f1", "isAdmin": "True" }
//Crear usuario estandar { "userName": "LuisCarlos", "email": "luiscarlos@gmail.com", "password": "dffdbdfg6g6fdv6f1" }
//En el Postman, vamos a la sección 'Headers' y ponemos 'x-auth-token' en el key y en el valor, el token que arroja cuando se registra o se inicia sesión
//Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2QxYzVjOTlkNjI1YzU1YjcxOTMwZWIiLCJuYW1lIjoiQ2FybG9zTSIsImVtYWlsIjoiY2FybG9zQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDY5MjA0Mn0.-0LSI-g-TjFtjL2gxSctMQa3un1u0qSkQVkSr7Qc4Wc