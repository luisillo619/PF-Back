const express = require("express");
const deleteAddres = express.Router();

const Addres = require("../../../models/Address");   

deleteAddres.use('/:id', async (req, res) =>{
    Addres.findByIdAndRemove(req.params.id, (error) => {
        if (error) {
            res.status(500).send(error);
        }else {
            res.status(200).send({ message: 'eliminado la informacion'});
        }
    });

});

module.exports= deleteAddres;
 