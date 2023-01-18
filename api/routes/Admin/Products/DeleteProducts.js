const express = require("express");
const { model } = require("mongoose");
const admin = express.Router();

const Products = require("../../../models/Products.js");

//  elimina.use('/:id', async (req, res) => {
//     console.log("req.params.name")
//     Products.findByIdAndRemove(req.params.id, (error) => {

//         if (error) {
//             res.status(500).send(error);
//         } else {
//             res.status(200).send({ message: 'Documento eliminado' });
//         }
//     });
// });
admin.use('/:nombre', (req, res) => {
    console.log(req.params.nombre)
    Products.deleteOne({name: req.params.nombre}, (error) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send({ message: 'Documento eliminado' });
        }
    });
})



/*admin.use('/:id', async (req, res, next)=>{
    const {idProduct} = req.params;
    const {partialRemoval} = req.body;
    try {
            const productDeleted = await Products.findByPk(idProduct)
        
        if(!!productDeleted && !partialRemoval){
            //eliminacion definitiva
            await productDeleted.destroy();
            return res.send({message : 'Se elimino correctamente el Producto Seleccionado.'});
        }else if(productDeleted && partialRemoval){
            //Eliminacion parcial
            await productDeleted.update({createdInDb: false});
            await productDeleted.save();

            return res.send({message: 'Se elemino parcialmente de la base de datos'});
        }
        else{
            res.status(404).json({message: 'Producto no encontrado'})

        }

        
    } catch (error) {
 
        console.error(error);

        next();
    }
})
*/

module.exports = admin;