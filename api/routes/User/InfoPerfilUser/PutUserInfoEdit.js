const express = require("express");
const putUserInfoEdit = express.Router();
const User = require("../../../models/Users");
const { isUser } = require("../../../middleware/auth");

// Ruta para Modificar los datos de un ususario especifico
putUserInfoEdit.put("/:id",isUser, (req, res) => {
    try {
        User.findByIdAndUpdate(
            req.params.id, req.body, { new: true }, (error, datos) => {
                if (!error) {
                    res.status(200).send('Información cambiada exitosamente.'); 
                }
                else{
                    res.status(500).send('Error al cambiar la información.');
                }
            }
        );
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
});
//GET a http://localhost:3001/getUsers para copiar el id de un usuario --> Ej: 63c9ad3c2a04cc93f10462bc
//Copiar JSON como modelo para enviar la solicitus POST { "_id": "63c9ad3c2a04cc93f10462bc", "userName": "Mario", "email": "mario@gmail.com", "password": "$2b$10$cEGbi0YDbw/rTxjxyhnpnOLQL4cs7JcJoFnGxK7CBEhJHf6xyxk3y", "signupDate": "2023-01-19T20:50:27.147Z", "favorites": [] }
//POST a http://localhost:3001/putUserInfoEdit/63c9ad3c2a04cc93f10462bc


module.exports = putUserInfoEdit;