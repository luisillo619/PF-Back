const nodemailer = require('nodemailer');               //LIbreria 'nodemailer'
require('dotenv').config();
const { SECRET, NODEMAILER } = process.env;             //Variables de entorno


module.exports = {
    transporter: nodemailer.createTransport({           //
        service: 'gmail',                               //
        auth: {
            user: 'eltero@gmail.com',                   //Correo de la empresa
            pass: NODEMAILER,                           //Contraseña del correo
        },
    }),


    mailDetails: (email) => {                           //^Mail de bienvenida para el cliente
        return {
            from: 'eltero@gmail.com',                   //Correo de la empresa
            to: email,                                  //Email del usuario
            subject: '¡Bienvenido a El Tero.net!',      //Asunto del corre
            html: ""
        }
    },


    mailDelete: (email) => {                            //^Mail de comunicación de cuenta eliminada para el cliente 
        return {
            from: 'eltero@gmail.com',
            to: email,
            subject: '¡Te esperamos pronto!',
            html: ""
            ,
        }
    },


    mailNewPassword: (email, link) => {                 //^Mail de comunicación de cuenta eliminada para el cliente 
        return {
            from: 'eltero@gmail.com',
            to: email,
            subject: 'Nueva contraseña',
            html: ""
            ,
        }
    },


    mailResponse: (email, name, response, comment) => {
        return {
            from: 'eltero@gmail.com',
            to: email,
            subject: 'Respuesta del administrador de El Tero',
            html:
                `
                <h1>Hola <b>${name},</b></h1>
                <p>Estamos encantados de poder solucionar tus dudas.</p>
                <br/>
                <p><b>Recimos tu duda en el comentario:</b></p>
                <p>${comment}</p>
                <br/>
                <p>Esperamos resolver du duda con lo siguiente:</p>
                <p>${response}</p>

                  <br/>
                  <br/>

                <p>Esperamos haberte ayudado</p>
                <p>Despues de respondida su pregunta, es eliminada automaticamente. Sientase libre de hacer otra pregunta si la tuviera</p>
                <a href="http://localhost:3000">Puedes usar este LINK para ir a nuestra tienda</a>
                <a href="http://localhost:3000/contactanos">Si tienes otra pregunta, escribenos aquí: </a>
                   `
            ,
        }
    },
};