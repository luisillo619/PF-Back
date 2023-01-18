const { Schema, model } = require("mongoose");

//AGREGAR VARIAS REFERENCIAS A LA ORDEN 
// const Purchase = mongoose.model('Purchase', purchaseSchema);

// new Order({
//   products: [productId1, productId2, productId3],
//   // Otros campos de la compra
// });

// purchase.save()
//   .then(purchase => {
//     // Compra guardada exitosamente
//   })
//   .catch(error => {
//     // Error al guardar la compra
//   });


const orderSchema = new Schema(
  {
    products: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }],
    Users: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        allownull: false,
      },
    total: {
      type: Number,
      allownull: false,
    }
    
  })
  module.exports = model("Order", orderSchema);