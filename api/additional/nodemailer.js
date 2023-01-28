const nodemailer = require('nodemailer');                               //Libreria 'nodemailer'
require('dotenv').config();
const { NODEMAILER } = process.env;                                     //Variables de entorno, NODEMAILER es la contraseña generada en Google


module.exports = {
    transporter: nodemailer.createTransport({                           //
        service: 'gmail',                                               //
        auth: {
            user: 'elteroexpresss@gmail.com',                           //Correo de la empresa
            pass: NODEMAILER,                                           //Contraseña del correo
        },
    }),


    mailDetails: (email) => {                                           //^Mail de bienvenida para el cliente
        return {
            from: 'elteroexpresss@gmail.com',                           //Correo de la empresa
            to: email,                                                  //Email del usuario
            subject: '¡Bienvenido a El Tero Express!',                  //Asunto del corre
            html: `
             <p>Te damos la bienvenida a El Tero Express!</p>
                <br/>
                <p><b>Estamos muy felices de que este correo se haya enviado, porque quiere decir que esta ruta está bien, vamos con toda para aprobar el PF.</b></p>
            `
        }
    },


    mailDelete: (email) => {                                            //^Mail de comunicación de cuenta eliminada para el cliente 
        return {
            from: 'elteroexpresss@gmail.com',
            to: email,
            subject: '¡Te esperamos pronto!',
            html:`
                <p>Es para nosotros una pena de que decidas eliminar tu cuenta, pero vuelve cuando lo desees</p>
                <br/>
                <p><b>Muchos éxitos!!!</b></p>
            `
        }
    },


    mailNewPassword: (email, link) => {                                 //^Mail de comunicación para cambiar contraseña del cliente 
        return {
            from: 'elteroexpresss@gmail.com',
            to: email,
            subject: 'Nueva contraseña',
            html: `
                <p>Este es tu correo de solicitud de cambio de contraseña.</p>
                <br/>
                <p><b>Da click en el siguiente enlace.</b></p>
                <br/>
                <a href=${link} ><b>LINK</b></a>
            `
            ,
        }
    },


    mailResponse: (email, name, response, comment) => {
        return {
            from: 'elteroexpresss@gmail.com',
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